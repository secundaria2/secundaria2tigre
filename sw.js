const CACHE_NAME = 'edu-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/logo192.png',
  './icons/logo512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
