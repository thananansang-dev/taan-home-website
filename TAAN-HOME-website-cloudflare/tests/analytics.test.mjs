import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const source=(await fs.readFile(new URL('../worker/analytics.mjs',import.meta.url),'utf8')).replace("import tracker from './analytics-tracker.js?raw';","const tracker='tracker';").replace("import dashboard from './analytics-dashboard.html?raw';","const dashboard='<html>dashboard</html>';"); 
const {analytics,channelFor}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const origin='https://taanhome.com';
const password='test-password-long-enough-123';
const auth={Authorization:'Basic '+btoa('admin:'+password)};
test('unrelated routes pass through',async()=>assert.equal(await analytics(new Request(origin+'/'),{}),null));
test('dashboard fails closed without secret',async()=>assert.equal((await analytics(new Request(origin+'/admin/analytics'),{})).status,503));
test('both private routes reject anonymous users',async()=>{for(const p of ['/admin/analytics','/api/analytics/report'])assert.equal((await analytics(new Request(origin+p),{ANALYTICS_ADMIN_PASSWORD:password})).status,401);});
test('dashboard is authenticated and not cached',async()=>{const r=await analytics(new Request(origin+'/admin/analytics',{headers:auth}),{ANALYTICS_ADMIN_PASSWORD:password});assert.equal(r.status,200);assert.equal(r.headers.get('cache-control'),'no-store');});
test('missing database is explicit',async()=>assert.equal((await analytics(new Request(origin+'/api/analytics/report',{headers:auth}),{ANALYTICS_ADMIN_PASSWORD:password})).status,503));
const db={prepare:()=>({bind:()=>({run:async()=>({success:true})})})};
const payload={id:crypto.randomUUID(),session:crypto.randomUUID(),kind:'click',path:'/collections/sofa',target:'lin.ee',referrer:'google.com'};
const event=(data,from=origin)=>new Request(origin+'/api/analytics/event',{method:'POST',headers:{Origin:from,'Content-Type':'application/json'},body:JSON.stringify(data)});
test('rejects cross-origin ingestion',async()=>assert.equal((await analytics(event(payload,'https://other.example'),{ANALYTICS_DB:db})).status,403));
test('rejects paths containing query data',async()=>assert.equal((await analytics(event({...payload,path:'/search?email=secret'}),{ANALYTICS_DB:db})).status,400));
test('rejects oversized events',async()=>assert.equal((await analytics(event({...payload,target:'a'.repeat(5000)}),{ANALYTICS_DB:db})).status,413));
test('valid event inserts with parameter binding',async()=>{let values;const database={prepare:()=>({bind:(...v)=>{if(v.length===11)values=v;return {run:async()=>({success:true})};}})};assert.equal((await analytics(event(payload),{ANALYTICS_DB:database})).status,204);assert.equal(values[4],'lin.ee');assert.equal(values.length,11);});
test('invalid report range is rejected',async()=>assert.equal((await analytics(new Request(origin+'/api/analytics/report?days=999',{headers:auth}),{ANALYTICS_ADMIN_PASSWORD:password,ANALYTICS_DB:db})).status,400));


test('UTM takes precedence and supported referrers classify correctly',()=>{assert.equal(channelFor('instagram','l.facebook.com'),'Instagram');assert.equal(channelFor('','l.facebook.com'),'Facebook');assert.equal(channelFor('','www.google.co.th'),'Google');assert.equal(channelFor('line',''),'LINE');assert.equal(channelFor('',''),'เข้าตรง / ไม่ทราบ');assert.equal(channelFor('','fakefacebook.com'),'เว็บไซต์อื่น');assert.equal(channelFor('partner','google.com'),'UTM / อื่น ๆ');});
test('oversized and non-string campaign tags are rejected',async()=>{for(const value of ['x'.repeat(101),{},'email@example.com'])assert.equal((await analytics(event({...payload,utm_campaign:value}),{ANALYTICS_DB:db})).status,400);});
test('channel and campaign are persisted',async()=>{let values;const database={prepare:()=>({bind:(...v)=>{if(v.length===11)values=v;return {run:async()=>({success:true})};}})};await analytics(event({...payload,utm_source:'Instagram',utm_medium:'paid_social',utm_campaign:'sofa_nov'}),{ANALYTICS_DB:database});assert.deepEqual(values.slice(7),['Instagram','instagram','paid_social','sofa_nov']);});
