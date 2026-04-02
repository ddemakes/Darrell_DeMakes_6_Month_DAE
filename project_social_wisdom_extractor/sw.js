// sw.js — Service Worker
// Social Wisdom Extractor | v1.0

const CACHE_NAME    = 'swe-cache-v1';
const OFFLINE_FILES = [
  '/index.html',
  '/app.js',
  '/manifest.json'
];

// ─── Install: cache core files ────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: caching core files');
      return cache.addAll(OFFLINE_FILES);
    })
  );
});

// ─── Activate: clean up old caches ───────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

// ─── Fetch: serve from cache, fall back to network ───────────────────────────
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});

// ─── Share Target: handle incoming shared content ────────────────────────────
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === '/share' && event.request.method === 'GET') {
    const title = url.searchParams.get('title') || '';
    const text  = url.searchParams.get('text')  || '';
    const link  = url.searchParams.get('url')   || '';
    console.log('SW: shared content received —', { title, text, link });
    event.respondWith(Response.redirect(`/?shared=true&text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`));
  }
});
