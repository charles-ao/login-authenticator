  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCngRlJCgIhfr1YCEHpXrPgnEYfyvGUL-I",
    authDomain: "login-auth-page.firebaseapp.com",
    projectId: "login-auth-page",
    storageBucket: "login-auth-page.appspot.com",
    messagingSenderId: "812442923214",
    appId: "1:812442923214:web:b3ba79459643b6228be09f"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;