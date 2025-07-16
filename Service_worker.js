self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('hacci-cache').then((cache) => {
      return cache.addAll(['js.html', 'Hacci-1.png', 'Hacci-2.png']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
