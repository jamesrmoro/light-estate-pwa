importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAj24jmWPwDn4AFJC4UQAQqQ806PDs7z4Y",
  authDomain: "lightstate-c114a.firebaseapp.com",
  projectId: "lightstate-c114a",
  messagingSenderId: "834487997149",
  appId: "1:834487997149:web:8eb6d65007bc5d92da4134"
});

const messaging = firebase.messaging();

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const action = event.notification.data?.click_action || '/';
  event.waitUntil(clients.openWindow(action));
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pixel-tracker-v1').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/icon-192.png',
        '/icon-512.png'
      ])
    )
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
