const CACHE_NAME = 'quran-ku-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    'https://files.catbox.moe/b6x6lz.png',
    'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=200&auto=format&fit=crop'
];

// Install Service Worker & Cache File Utama
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Aktivasi & Hapus Cache Lama jika ada pembaruan
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Strategi Fetch: Ambil dari Cache dulu, jika tidak ada baru ambil dari Jaringan
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then((response) => {
                // Simpan otomatis API/Resource baru yang berhasil di-fetch ke cache
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            });
        }).catch(() => {
            // Jika benar-benar offline dan request tidak ada di cache
            return caches.match('./index.html');
        })
    );
});
