importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Substitua com seu config do Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAj24jmWPwDn4AFJC4UQAQqQ806PDs7z4Y",
  authDomain: "lightstate-c114a.firebaseapp.com",
  projectId: "lightstate-c114a",
  messagingSenderId: "834487997149",
  appId: "1:834487997149:web:8eb6d65007bc5d92da4134"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title, {
      body: payload.notification.body,
      icon: '/icone.png'
    }
  );
});
