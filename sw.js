const C = 'ayet-studio-v2';
const DOSYALAR = ['./', './index.html', './mp4-muxer.js', './manifest.json', './icon.svg'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(C).then((c) => c.addAll(DOSYALAR)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== C).map((x) => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const kaydet = (res) => { if (res.ok || res.type === 'opaque') { const cp = res.clone(); caches.open(C).then((c) => c.put(e.request, cp)); } return res; };
  if (e.request.mode === 'navigate') { e.respondWith(fetch(e.request).then(kaydet).catch(() => caches.match('./index.html'))); return; }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then(kaydet)));
});
