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

var loginEmailTextField = document.getElementById("loginEmailTextField");
var loginPasswordTextField = document.getElementById("loginPasswordTextField");
var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function() {
    var email = loginEmailTextField.innerHTML;
    var password = loginPasswordTextField.innerHTML;
    Login(email, password);
})

function Login(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        alert("Logged in!");
    }).catch(function(error) {
        alert(error.message);
    })
}