import tracker from './analytics-tracker.js?raw';
import dashboard from './analytics-dashboard.html?raw';

const headers = {'Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow','X-Content-Type-Options':'nosniff'};
const json = (data, status = 200) => Response.json(data, {status, headers});
export function channelFor(source = '', referrer = '') {
 const value = source.trim().toLowerCase();
 const host = referrer.toLowerCase().replace(/\.$/,'');
 const domain = name => host === name || host.endsWith('.'+name);
 const aliases = {facebook:'Facebook',fb:'Facebook',instagram:'Instagram',ig:'Instagram',google:'Google',line:'LINE',tiktok:'TikTok',youtube:'YouTube',email:'Email',newsletter:'Email'};
 if(value) return aliases[value] || 'UTM / อื่น ๆ';
 if(domain('facebook.com') || domain('fb.com'))return 'Facebook';
 if(domain('instagram.com'))return 'Instagram';
 if(domain('google.com') || domain('google.co.th'))return 'Google';
 if(domain('line.me') || domain('lin.ee'))return 'LINE';
 if(domain('tiktok.com'))return 'TikTok';
 if(domain('youtube.com') || domain('youtu.be'))return 'YouTube';
 return host ? 'เว็บไซต์อื่น' : 'เข้าตรง / ไม่ทราบ';
}
function validAdminPassword(value) {
 return typeof value === 'string' && value.length >= 8 && /^[\x21-\x7e]+$/.test(value) && /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
}
async function authorized(request, env) {
 if (!validAdminPassword(env.ANALYTICS_ADMIN_PASSWORD)) return false;
 const expected = 'Basic ' + btoa('admin:' + env.ANALYTICS_ADMIN_PASSWORD);
 const hash = async value => new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)));
 const [a,b] = await Promise.all([hash(request.headers.get('Authorization') || ''),hash(expected)]);
 let diff = 0; for(let i=0;i<a.length;i++) diff |= a[i]^b[i]; return diff === 0;
}
export async function analytics(request, env) {
 const url = new URL(request.url);
 if (url.pathname === '/analytics.js') return new Response(tracker,{headers:{'Content-Type':'text/javascript; charset=utf-8','Cache-Control':'public,max-age=300'}});
 const admin = url.pathname === '/admin/analytics' || url.pathname === '/admin/analytics/';
 const report = url.pathname === '/api/analytics/report';
 const event = url.pathname === '/api/analytics/event';
 if (!admin && !report && !event) return null;
 if (admin || report) {
  if (!validAdminPassword(env.ANALYTICS_ADMIN_PASSWORD)) return new Response('Analytics admin is not configured.',{status:503,headers});
  if (!await authorized(request,env)) return new Response('Authentication required',{status:401,headers:{...headers,'WWW-Authenticate':'Basic realm="TAAN HOME Analytics", charset="UTF-8"'}});
  if (request.method !== 'GET') return json({error:'Method not allowed'},405);
  if (admin) return new Response(dashboard,{headers:{...headers,'Content-Type':'text/html; charset=utf-8','Content-Security-Policy':"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'"}});
 }
 if (!env.ANALYTICS_DB) return json({error:'Analytics database not configured'},503);
 if (event) {
  if(request.method !== 'POST') return json({error:'Method not allowed'},405);
  if(request.headers.get('Origin') !== url.origin) return json({error:'Invalid origin'},403);
  if(!request.headers.get('Content-Type')?.startsWith('application/json')) return json({error:'Expected JSON'},415);
  try {
   const reader=request.body?.getReader(); if(!reader)return json({error:'Missing body'},400);
   let length=0; const chunks=[];
   while(true){const {value,done}=await reader.read();if(done)break;length+=value.length;if(length>4096){await reader.cancel();return json({error:'Too large'},413);}chunks.push(value);}
   const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
   const d=JSON.parse(new TextDecoder().decode(bytes));
   const uuid=/^[a-f0-9-]{36}$/i;
   if(!uuid.test(d.id)||!uuid.test(d.session)||!['pageview','click'].includes(d.kind)||typeof d.path!=='string'||!/^\/[a-zA-Z0-9/_-]*$/.test(d.path)||d.path.length>200||d.path.startsWith('/admin')||typeof d.target!=='string'||d.target.length>180||typeof d.referrer!=='string'||d.referrer.length>180) return json({error:'Invalid event'},400);
   for (const key of ['utm_source','utm_medium','utm_campaign']) {
    d[key] ??= '';
    if(typeof d[key] !== 'string' || d[key].length > 100 || !/^[a-zA-Z0-9_ .~-]*$/.test(d[key]))return json({error:'Invalid attribution'},400);
   }
   d.utm_source=d.utm_source.toLowerCase();d.utm_medium=d.utm_medium.toLowerCase();
   if(d.referrer===url.hostname)d.referrer='';
   const channel=channelFor(d.utm_source,d.referrer);
   await env.ANALYTICS_DB.prepare('INSERT OR IGNORE INTO analytics_events (id, session, kind, path, target, referrer, created_at, channel, utm_source, utm_medium, utm_campaign) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(d.id,d.session,d.kind,d.path,d.target,d.referrer,Date.now(),channel,d.utm_source,d.utm_medium,d.utm_campaign).run();
   // Retention runs on ingestion; no IP address, full referrer URL or form data is stored.
   await env.ANALYTICS_DB.prepare('DELETE FROM analytics_events WHERE created_at < ?').bind(Date.now()-90*86400000).run();
   return new Response(null,{status:204,headers});
  } catch { return json({error:'Unable to record event'},400); }
 }
 const days=Number(url.searchParams.get('days')||30);
 if(![7,30,90].includes(days))return json({error:'Invalid range'},400);
 const since=Math.floor((Date.now()+7*3600000)/86400000)*86400000-7*3600000-(days-1)*86400000;
 try {
  const queries=[
   "SELECT COUNT(DISTINCT session) sessions, COALESCE(SUM(kind='pageview'),0) views, COALESCE(SUM(kind='click'),0) clicks FROM analytics_events WHERE created_at >= ?",
   "SELECT path, COUNT(*) total FROM analytics_events WHERE created_at >= ? AND kind='pageview' GROUP BY path ORDER BY total DESC LIMIT 30",
   "SELECT path,target, COUNT(*) total FROM analytics_events WHERE created_at >= ? AND kind='click' GROUP BY path,target ORDER BY total DESC LIMIT 50",
   "WITH ranked AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY session ORDER BY created_at,id) rn FROM analytics_events WHERE created_at >= ?) SELECT channel,COUNT(*) total FROM ranked WHERE rn=1 GROUP BY channel ORDER BY total DESC",
   "WITH ranked AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY session ORDER BY created_at,id) rn FROM analytics_events WHERE created_at >= ?) SELECT channel,utm_source,utm_medium,utm_campaign,COUNT(*) total FROM ranked WHERE rn=1 GROUP BY channel,utm_source,utm_medium,utm_campaign ORDER BY total DESC LIMIT 50",
   "SELECT date(created_at/1000,'unixepoch','+7 hours') day,COUNT(*) total FROM analytics_events WHERE created_at >= ? AND kind='pageview' GROUP BY day ORDER BY day"
  ];
  const data=await env.ANALYTICS_DB.batch(queries.map(q=>env.ANALYTICS_DB.prepare(q).bind(since)));
  return json({summary:data[0].results[0],pages:data[1].results,clicks:data[2].results,sources:data[3].results,campaigns:data[4].results,daily:data[5].results});
 } catch { return json({error:'Analytics database requires migration'},503); }
}


