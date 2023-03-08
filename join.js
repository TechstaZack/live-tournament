var roomName = localStorage.getItem('room_name')

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

function password() {
var password = document.getElementById('password').value ;
var Username = document.getElementById('bracketName').value;

    firebase.database().ref("/rooms/"+roomName).orderByChild("active").equalTo('yes').once("value",snapshot => {
        if (snapshot.exists()){
            document.getElementById('error').innerHTML = "Oop! Sorry to crash your party, but the room is already active. Try joining next time!"
        }else{
            firebase.database().ref("/rooms/"+roomName).orderByChild("password").equalTo(password).once("value",snapshot => {
                if(snapshot.exists()){
                    save();
                }else{
                    document.getElementById('error').innerHTML = 'Ahh! Wrong password. Try Again.'
                }
            })
        }
    })
}

function save() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    key = childKey;
    data = childData;
 amount = data['amount'];
 entered = data['entered'];

 if(amount = '8'){
    
    entered = entered + 1;
    if(entered > 8){
        document.getElementById('error').innerHTML = 'Room is full. '
    }else{
        firebase.database().ref("/rooms/"+roomName).update({
            entered: entered
        });

    if(entered == 1){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place1: Username
        });
    }
    if(entered == 2){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place2: Username
        });
    }
    if(entered == 3){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place3: Username
        });
    }
    if(entered == 4){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place4: Username
        });
    }
    if(entered == 5){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place5: Username
        });
    }
    if(entered == 6){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place6: Username
        });
    }
    if(entered == 7){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place7: Username
        });
    }
    if(entered == 8){
        firebase.database().ref("/rooms/"+roomName+'/users/').update({
            place8: Username
        });
    }
    localStorage.setItem('amount', '18');
    window.location = 'bracket8.js'
    }
 }
 if(amount = '16'){
    
    entered = entered + 1;
    if(entered > 16){
        document.getElementById('error').innerHTML = 'Room is full. '
    }else{
        firebase.database().ref("/rooms/"+roomName).update({
            entered: entered
        });

        if(entered == 1){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place1: Username
            });
        }
        if(entered == 2){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place2: Username
            });
        }
        if(entered == 3){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place3: Username
            });
        }
        if(entered == 4){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place4: Username
            });
        }
        if(entered == 5){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place5: Username
            });
        }
        if(entered == 6){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place6: Username
            });
        }
        if(entered == 7){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place7: Username
            });
        }
        if(entered == 8){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place8: Username
            });
        }if(entered == 9){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place9: Username
            });
        }
        if(entered == 10){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place10: Username
            });
        }
        if(entered == 11){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place11: Username
            });
        }
        if(entered == 12){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place12: Username
            });
        }
        if(entered == 13){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place13: Username
            });
        }
        if(entered == 14){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place14: Username
            });
        }
        if(entered == 15){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place15: Username
            });
        }
        if(entered == 16){
            firebase.database().ref("/rooms/"+roomName+'/users/').update({
                place16: Username
            });
        }
        localStorage.setItem('amount', '16');
    window.location = 'bracket16.js'
    }
}

 } });  }); }