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

function Create() {
    bracketName = document.getElementById('name').value;
    bracketPassword = document.getElementById('password').value;
    var e = document.getElementById("ppl");
    var value = e.value;
    var amount = e.options[e.selectedIndex].text;

    firebase.database().ref("/rooms/").orderByChild("name").equalTo(bracketName).once("value",snapshot => {
        if (snapshot.exists()){
          document.getElementById("error").innerHTML = "Room with name already exists";
        }
        else {
            if(amount == "---"){
                document.getElementById('error').innerHTML = "Please select the amount of people you want in your tournament."
                    }else if(bracketPassword.length > 1){
                        
                        firebase.database().ref("/rooms/").child(bracketName).update({
                            name: bracketName,
                            havepassword: 'yes',
                            password: bracketPassword,
                            amount: amount,
                            active: 'no'
                         });
                         localStorage.setItem('room_name', bracketName)
                         window.location = "bracket.html"
                    }else{
                        firebase.database().ref("/rooms/").child(accountLogin).update({
                            name: bracketName,
                            havepassword: 'no',
                            amount: amount,
                            active: 'no'
                         });
                         localStorage.setItem('room_name', bracketName)
                         window.location = "bracket.html"
                    }
        }
    });
}