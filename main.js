var firebaseConfig = {
    apiKey: "AIzaSyBgyU-BxHtQ31FnMD-P9ET4B7jU6Om3KAI",
    authDomain: "tournament-a822c.firebaseapp.com",
    databaseURL: "https://tournament-a822c-default-rtdb.firebaseio.com",
    projectId: "tournament-a822c",
    storageBucket: "tournament-a822c.appspot.com",
    messagingSenderId: "970207851702",
    appId: "1:970207851702:web:3547ecc03b90808e53e217"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var logorsign = "1"


function Next() {
    if(logorsign == "1"){
    document.getElementById("signup").innerHTML = "Log In Instead";
    document.getElementById("login").innerHTML = "Sign Up";
    document.getElementById("loginorsign").innerHTML = "Sign Up";
    logorsign = "2";
    }else{
        document.getElementById("signup").innerHTML = "Sign Up Instead";
    document.getElementById("login").innerHTML = "Log In";
    document.getElementById("loginorsign").innerHTML = "Log In";
    logorsign = "1";
    }
}

function getIn() {
    if(logorsign == "1"){
        accountLogin = document.getElementById("login").value;
        document.getElementById('error').innerHTML = "";
        loginVerification();

    }else if(logorsign == "2"){
        document.getElementById('error').innerHTML = "";
        signup()
    }
}

function loginVerification() { 

    accountLogin = document.getElementById("user_name").value;
    password = document.getElementById('password').value;
    accountLogin = accountLogin.toLowerCase();

    firebase.database().ref("/users/").orderByChild("username").equalTo(accountLogin).once("value",snapshot => {
        if (snapshot.exists()){
            firebase.database().ref("/users/").orderByChild("password").equalTo(password).once("value",snapshot => {
                if (snapshot.exists()){
                    localStorage.setItem("allowed", "yes");
                    localStorage.setItem('user', accountLogin);
                    window.location = "index.html";
                }else{
                    document.getElementById("error").innerHTML = "Incorrect Username or Password.";
                }
            })
        }else{
            document.getElementById("error").innerHTML = "Incorrect Username or Password.";
        }
}
)}

 function signup() {
    accountLogin = document.getElementById("user_name").value;
    password = document.getElementById('password').value;
    accountLogin = accountLogin.toLowerCase();

    firebase.database().ref("/users/").orderByChild("username").equalTo(accountLogin).once("value",snapshot => {
        if (snapshot.exists()){
          document.getElementById("error").innerHTML = "Account with username already exists!";
        }
        else {
            firebase.database().ref("/users/").child(accountLogin).update({
                username: accountLogin,
                password: password
             });
             document.getElementById("error").innerHTML = "Signed You Up! Please login to access your account.";
        }
    });
}

function back() {
    window.location = "index.html";
}