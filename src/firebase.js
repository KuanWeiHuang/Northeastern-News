
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBvadaCBtDtgN4kK7RtugEmB0JToERhvfs",
  authDomain: "northeastern-news.firebaseapp.com",
  databaseURL: "https://northeastern-news.firebaseio.com",
  projectId: "northeastern-news",
  storageBucket: "northeastern-news.appspot.com",
  messagingSenderId: "133211739205",
  // appId: "1:133211739205:web:6178de13c6af44d5f1bf2c",
  // measurementId: "G-4DWQWEN1DY"
};

const Firebase = firebase.initializeApp(config);

const Auth = firebase.auth();

export {Firebase, Auth};