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
})