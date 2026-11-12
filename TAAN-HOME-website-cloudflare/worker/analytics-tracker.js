(() => {
 if (location.pathname.startsWith('/admin')) return;
 let last = '', sid = '', count = 0;
 const landing = new URL(location.href);
 const clean = value => (value || '').replace(/[^a-zA-Z0-9_ .~-]/g, '').slice(0,100);
 const arrival = {referrer: document.referrer ? new URL(document.referrer).hostname : '',
  utm_source:clean(landing.searchParams.get('utm_source')).toLowerCase(),
  utm_medium:clean(landing.searchParams.get('utm_medium')).toLowerCase(),
  utm_campaign:clean(landing.searchParams.get('utm_campaign'))};
 if (arrival.referrer === location.hostname) arrival.referrer = '';
 let attribution;
 function acquisition() {
  if (attribution) return attribution;
  try { attribution = JSON.parse(sessionStorage.getItem('taan_analytics_acquisition')); } catch {}
  if (!attribution || typeof attribution !== 'object') {
   attribution = arrival;
   sessionStorage.setItem('taan_analytics_acquisition',JSON.stringify(attribution));
  }
  return attribution;
 }
 const consent = () => { try { return localStorage.getItem('taan_meta_marketing_consent') === 'accepted'; } catch { return false; } };
 function send(kind, target = '') {
  if (!consent() || count >= 200 || navigator.doNotTrack === '1') return;
  try {
   if (!sid) { sid = sessionStorage.getItem('taan_analytics_session') || crypto.randomUUID(); sessionStorage.setItem('taan_analytics_session', sid); }
   const source = acquisition();
   count++;
   fetch('/api/analytics/event', {method:'POST', headers:{'Content-Type':'application/json'}, keepalive:true,
    body:JSON.stringify({id:crypto.randomUUID(),session:sid,kind,path:location.pathname,target,...source})}).catch(()=>{});
  } catch {}
 }
 function page() { if (consent() && last !== location.pathname) { last = location.pathname; send('pageview'); } }
 document.addEventListener('click', e => {
  const el = e.target instanceof Element ? e.target.closest('a[href],button') : null;
  if (!el || el.closest('.cookie-consent')) return;
  let target = el.getAttribute('data-meta-event') || el.getAttribute('aria-label') || 'button';
  if (el instanceof HTMLAnchorElement) {
   const url = new URL(el.href, location.href);
   target = url.origin === location.origin ? url.pathname + (url.hash ? url.hash.slice(0,60) : '') : url.hostname;
   if (url.protocol === 'tel:') target = 'phone';
   if (url.protocol === 'mailto:') target = 'email';
  }
  send('click', target.slice(0,180));
 });
 window.addEventListener('taan-consent-change', page);
 window.addEventListener('popstate', page);
 const original = history.pushState;
 history.pushState = function(...args) { original.apply(this,args); page(); };
 page();
})();
