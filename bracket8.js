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

whereBe = localStorage.getItem('amount');

if(whereBe == '8'){

}else if(whereBe == "16"){
    window.location = 'bracket16.html'
}

owner = localStorage.getItem('owner');

function getData() { firebase.database().ref("/"+room_name+'/users/').on('value', function(snapshot) { snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    key = childKey;
    data = childData;
    if(owner == 'yes'){
        document.getElementById('output').innerHTML = "<button class='btn btn-success' onclick='begin()'><span class='glyphicon glyphicon-flag'> Start</span></button>"
    }
    place1 = data['place1']
    place2 = data['place2']
    place3 = data['place3']
    place4 = data['place4']
    place5 = data['place5']
    place6 = data['place6']
    place7 = data['place7']
    place8 = data['place8']
    place9 = data['place9']
    place10 = data['place10']
    place11 = data['place11']
    place12 = data['place12']
    place13 = data['place13']
    place14 = data['place14']

    document.getElementById('place_1').innerHTML = place1;
    document.getElementById('place_2').innerHTML = place2;
    document.getElementById('place_3').innerHTML = place3;
    document.getElementById('place_4').innerHTML = place4;
    document.getElementById('place_5').innerHTML = place5;
    document.getElementById('place_6').innerHTML = place6;
    document.getElementById('place_7').innerHTML = place7;
    document.getElementById('place_8').innerHTML = place8;
    document.getElementById('entered_1').innerHTML = place1;
    document.getElementById('entered_2').innerHTML = place2;
    document.getElementById('entered_3').innerHTML = place3;
    document.getElementById('entered_4').innerHTML = place4;
    document.getElementById('entered_5').innerHTML = place5;
    document.getElementById('entered_6').innerHTML = place6;
    document.getElementById('entered_7').innerHTML = place7;
    document.getElementById('entered_8').innerHTML = place8;


    document.getElementById('place_9').innerHTML = place9;
    document.getElementById('place_10').innerHTML = place10;
    document.getElementById('place_11').innerHTML = place11;
    document.getElementById('place_12').innerHTML = place12;
    document.getElementById('place_13').innerHTML = place13;
    document.getElementById('place_14').innerHTML = place14;

 } });  }); }
getData();
