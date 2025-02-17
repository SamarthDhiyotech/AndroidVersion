importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

firebase.initializeApp(
//   {  
//     apiKey: "AIzaSyBQcUPkDxYBpxFqfwgo8aN-Cfnn_nDnczk",
//     authDomain: "surshr-e0956.firebaseapp.com",
//     projectId: "surshr-e0956",
//     storageBucket: "surshr-e0956.firebasestorage.app",
//     messagingSenderId: "369018180065",
//     appId: "1:369018180065:web:92aa0429e142f5a0fe82a0",
//     measurementId: "G-DEHNHMRWLV"
// }
{
  apiKey: "AIzaSyDlRh2wKSLHbBYlsZoVyenY85oEZR8DSqw",
authDomain: "project-odoo13.firebaseapp.com",
projectId: "project-odoo13",
storageBucket: "project-odoo13.firebasestorage.app",
messagingSenderId: "379220021748",
appId: "1:379220021748:web:8e6ac9327eeeff003429a1",
measurementId: "G-FQ52FQYYT7"
}
);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icon.png', 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
