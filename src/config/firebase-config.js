import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAyAo0ycYc7_qyosP69FwE0UCOsO0uxn2o",
    authDomain: "starships-shop.firebaseapp.com",
    databaseURL: "https://starships-shop.firebaseio.com",
    projectId: "starships-shop",
    storageBucket: "starships-shop.appspot.com",
    messagingSenderId: "698592195033",
    appId: "1:698592195033:web:0f9dd45d572110dd8f69c8"
  };
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);

  export default Firebase; 