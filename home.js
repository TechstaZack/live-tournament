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

loggedin = localStorage.getItem('allowed');


function signIn() {
    window.location = "login.html"
}


if(loggedin == "yes"){
document.getElementById('create').innerHTML = "<button id='createBut' class='glyphicon glyphicon-plus-circle btn btn-success' onclick='Create()'> Create A Room</button>"
document.getElementById('loginOrSignOut').innerHTML = "<button id='logout' class='glyphicon glyphicon-log-out btn btn-danger inout' onclick='logout()'> Logout</button>"
}else{
    document.getElementById('loginOrSignOut').innerHTML = "<button id='logout' class='glyphicon glyphicon-log-out btn btn-success inout' onclick='signIn()'> Login</button>"

}

function logout() {
    localStorage.removeItem('allowed');
    location.reload();
}

function Create(){
    window.location = "create.html";
}

function getData() {firebase.database().ref("/rooms/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    row = "<div id="+Room_names+" onclick='redirectToRoomName(this.id)' class='brackets'>"+ Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location = "bracket.html"
  }