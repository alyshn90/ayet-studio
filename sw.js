const CACHE = 'ayet-studio-v1';
const DOSYALAR = [
  './', './index.html', './manifest.json', './icon.svg', './ornek-sablon.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DOSYALAR)));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
  )));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const kopya = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, kopya));
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});