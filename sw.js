const CACHE = 'quiz-en-familia-v5';
const ASSETS = [
  './','./index.html?v=5','./style.css?v=5','./app.js?v=5',
  './friends.js?v=5','./stranger.js?v=5','./patrulla.js?v=5',
  './friends.webp','./stranger.webp','./patrulla.webp',
  './manifest.webmanifest?v=5','./icon-192.png?v=5','./icon-512.png?v=5'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response;
  }).catch(() => caches.match(event.request).then(hit => hit || caches.match('./index.html?v=5'))));
});
