//Login HTML Objects
var loginEmailTextField = document.getElementById("loginEmailTextField");
var loginPasswordTextField = document.getElementById("loginPasswordTextField");
var loginButton = document.getElementById("loginButton");
//Register HTLM Objects
var registerFirstNameTextField = document.getElementById("registerFirstNameTextField");
var registerLastNameTextField = document.getElementById("registerLastNameTextField");
var registerEmailTextField = document.getElementById("registerEmailTextField");
var registerPasswordTextField = document.getElementById("registerPasswordTextField");
var registerPasswordConfirmTextField = document.getElementById("registerPasswordConfirmTextField");
var registerButton = document.getElementById("registerButton");

loginButton.addEventListener("click", function() {
    var email = loginEmailTextField.value;
    var password = loginPasswordTextField.value;
    Login(email, password);
})
registerButton.addEventListener("click", function() {
    var firstName = registerFirstNameTextField.value;
    var lastName = registerLastNameTextField.value;
    var email = registerEmailTextField.value;
    var password = registerPasswordTextField.value;
    Register(firstName, lastName, email, password);
})

function Login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        //Logged in
        alert("Logged in!");
    }).catch(function(error) {
        //Can't login
        alert(error.message);
    })
}
function Register(firstName, lastName, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        firebase.firestore().collection("Users").doc(email).set({
            email: email
        }).then(function() {
            alert("Account registration done!");
        }).catch(function(error) {
            //Can't register: create account in the database
            alert(error.message);
        })
    }).catch(function(error) {
        //Can't register: create account in the auth
        alert(error.message);
    })
}
function Logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = homeURL;
    }
});