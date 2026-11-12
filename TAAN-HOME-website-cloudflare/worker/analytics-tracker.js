(() => {
 if (location.pathname.startsWith('/admin')) return;
 let last = '', sid = '', count = 0;
 const consent = () => { try { return localStorage.getItem('taan_meta_marketing_consent') === 'accepted'; } catch { return false; } };
 function send(kind, target = '') {
  if (!consent() || count >= 200 || navigator.doNotTrack === '1') return;
  try {
   if (!sid) { sid = sessionStorage.getItem('taan_analytics_session') || crypto.randomUUID(); sessionStorage.setItem('taan_analytics_session', sid); }
   const referrer = document.referrer ? new URL(document.referrer).hostname : '';
   count++;
   fetch('/api/analytics/event', {method:'POST', headers:{'Content-Type':'application/json'}, keepalive:true,
    body:JSON.stringify({id:crypto.randomUUID(),session:sid,kind,path:location.pathname,target,referrer})}).catch(()=>{});
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