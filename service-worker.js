// Service Worker for NCE Flow PWA
const CACHE_NAME = 'nce-flow-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/lesson.html',
  '/book.html',
  '/assets/styles.css',
  '/assets/app.js',
  '/assets/lesson.js',
  '/assets/progress.js',
  '/assets/favorites.js',
  '/static/data.json',
  '/favicon.ico'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle audio files with cache-first strategy
  if (request.url.includes('.mp3') || request.url.includes('.lrc')) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request).then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseToCache);
              });
            
            return response;
          });
        })
    );
    return;
  }

  // Network-first strategy for HTML files
  if (request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first strategy for other assets
  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request))
  );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  // Sync learning progress when back online
  console.log('Syncing progress...');
}
