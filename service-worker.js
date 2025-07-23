const CACHE_NAME = 'turborush-x-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/file_000000004cfc620a80df6882bbcad62a.png',
  '/assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
