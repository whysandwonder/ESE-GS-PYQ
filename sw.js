/* UPSC ESE PYQ portal service worker: keeps a full offline copy; built 202610281949 */
const CACHE = 'ese-pyq-202610281949';
const ASSETS = [
 "./",
 "./index.html",
 "./manifest.webmanifest",
 "./icon-192.png",
 "./icon-512.png",
 "./icon-maskable-512.png",
 "./apple-touch-icon.png",
 "./style.css?v=20261029a",
 "./data/subjects.js?v=20261028a",
 "./data/q2026a.js",
 "./data/q2026b.js",
 "./data/q2026c.js",
 "./data/q2026d.js",
 "./data/q2025a.js",
 "./data/q2025b.js",
 "./data/q2025c.js",
 "./data/q2025d.js",
 "./data/q2024a.js",
 "./data/q2024b.js",
 "./data/q2024c.js",
 "./data/q2024d.js",
 "./data/q2023a.js",
 "./data/q2023b.js",
 "./data/q2023c.js",
 "./data/q2023d.js",
 "./data/q2022a.js",
 "./data/q2022b.js",
 "./data/q2022c.js",
 "./data/q2022d.js",
 "./data/q2021a.js",
 "./data/q2021b.js",
 "./data/q2021c.js",
 "./data/q2021d.js",
 "./data/q2020a.js",
 "./data/q2020b.js",
 "./data/q2020c.js",
 "./data/q2020d.js",
 "./data/q2019a.js",
 "./data/q2019b.js",
 "./data/q2019c.js",
 "./data/q2019d.js",
 "./data/q2018a.js",
 "./data/q2018b.js",
 "./data/q2018c.js",
 "./data/q2018d.js",
 "./data/q2017a.js",
 "./data/q2017b.js",
 "./data/q2017c.js",
 "./data/q2017d.js",
 "./data/analysis_units.js?v=20261029c",
 "./data/analysis_map.js?v=20261029c",
 "./app.js?v=20261029c",
 "./img/2018-10.png",
 "./img/2018-40.png",
 "./img/2018-46.png",
 "./img/2018-50.png",
 "./img/2019-25.png",
 "./img/2019-30.png",
 "./img/2020-14.png",
 "./img/2021-56.png",
 "./img/2023-80.png",
 "./img/2024-17.png",
 "./img/2024-24.png",
 "./img/2024-7.png",
 "./img/2026-71.png",
 "./img/2026-73.png",
 "./img/2026-74.png",
 "./img/2026-75.png",
 "./img/2026-83.png",
 "./img/2026-85.png"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('ese-pyq-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* The page: network first, so a new upload shows on the next open; the saved copy when offline.
   Everything else: saved copy first (file names carry a version), else the network. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); } return res; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
