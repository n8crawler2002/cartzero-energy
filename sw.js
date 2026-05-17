const CACHE = 'cz-v7';
const SHELL = [
  '/',
  '/index.html',
  '/join.html',
  '/dashboard.html',
  '/map.html',
  '/mycart.html',
  '/discover.html',
  '/tracker.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // tracker.json: always network-first (source of truth)
  if(url.pathname.includes('tracker.json')){
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Shell files: cache-first
  if(SHELL.some(s => url.pathname === s || url.pathname.startsWith(s))){
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request))
    );
  }
});
