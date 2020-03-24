import firebase from 'firebase';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyCAbklNQ3uuJaW_aBuSuoAl-mEzD6TaJb4",
    authDomain: "northeastern-news-2d9e0.firebaseapp.com",
    databaseURL: "https://northeastern-news-2d9e0.firebaseio.com",
    projectId: "northeastern-news-2d9e0",
    storageBucket: "northeastern-news-2d9e0.appspot.com",
    messagingSenderId: "478660589593",
    // appId: "1:478660589593:web:8c08fdcd5e54c8e81dd288",
    // measurementId: "G-CKDK76LYQQ"
};


const Firebase = firebase.initializeApp(config);


const Auth = firebase.auth();


export {Firebase, Auth};