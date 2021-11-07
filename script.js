import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByG9SfLxRXXMstgeoq3D6-nJ57gU18zUM",
  authDomain: "check-259a3.firebaseapp.com",
  projectId: "check-259a3",
  storageBucket: "check-259a3.appspot.com",
  messagingSenderId: "1316488882",
  appId: "1:1316488882:web:c6b371e510959caaa22bab",
  measurementId: "G-4K2WJV3EFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging();

getToken({vapidKey: "BJGt9K7tA7ZV2w9C8WWuKo0EdwguGU5wEvpAzbW8Rwyabp0uONR8IUxKXJKTHcoDuwb3NXZ-4dC2gTEQe8tQp10"});

getToken(messaging, { vapidKey: 'BJGt9K7tA7ZV2w9C8WWuKo0EdwguGU5wEvpAzbW8Rwyabp0uONR8IUxKXJKTHcoDuwb3NXZ-4dC2gTEQe8tQp10' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
