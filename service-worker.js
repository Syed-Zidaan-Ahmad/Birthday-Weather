// Service Worker for Birthday Weather
const CACHE_NAME = "birthday-weather-cache-v1"; // Name of the cache
// Files to cache
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/Birthday Weather 192.png",
  "/Birthday Weather 512.png",
  "/manifest.json"
];
// Install 
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }))
    )
  );
});
// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
// End of Program
