
const CACHE_NAME = 'nextjs-static-v1';

// Cache these URLs on install
const STATIC_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/favicon.ico',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/screenshots/home.png',
  '/screenshots/home-desktop.png',
];

// On install: cache predefined static files
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// On activate: clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// On fetch: serve from cache first, then network fallback
self.addEventListener('fetch', event => {
  const { request } = event;

  // Only cache GET requests
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      // Try to fetch from network and cache it for next time
      return fetch(request)
        .then(networkResponse => {
          if (
            !request.url.startsWith(self.location.origin) ||
            request.url.includes('/api/')
          ) {
            return networkResponse;
          }

          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Offline fallback logic if needed
          if (request.destination === 'document') {
            return caches.match('/');
          }
        });
    })
  );
});

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open('pwa-cache').then(cache =>
//       cache.addAll([
//         '/',
//         '/manifest.webmanifest',
//         '/favicon.ico',
//         '/b4dac46e-f71a-442e-be96-f7a841eaaf16.png',
//         '/contact-us',
//         '/'
//       ])
//     )
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(cached => cached || fetch(event.request))
//   );
// });
