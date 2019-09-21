const firebaseConfig = {
    apiKey: "AIzaSyBeVO6L9NOm_Q1oBSwu5Lv8UvtbnvZEJlM",
    authDomain: "klas-kalend.firebaseapp.com",
    databaseURL: "https://klas-kalend.firebaseio.com",
    projectId: "klas-kalend",
    storageBucket: "klas-kalend.appspot.com",
    messagingSenderId: "810220527567",
    appId: "1:810220527567:web:9b1167dba05659dec2bcba"
};
firebase.initializeApp(firebaseConfig);

//URL's
const baseURL = "http://localhost:5000/";
const homeURL = baseURL + "home.html";