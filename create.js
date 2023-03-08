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
            if(amount == "blank"){
                document.getElementById('error').innerHTML = "Please select the amount of people you want in your tournament."
                    }else {
                         firebase.database().ref("/rooms/"+bracketName).update({
                            name: bracketName,
                            password: bracketPassword,
                            amount: amount,
                            entered: 0,
                            active: 'no'
                         });
                         if(amount == '8'){
                         firebase.database().ref("/rooms/"+bracketName+'/users/').update({
                            place1: 'empty',
                            place2: 'empty',
                            place3: 'empty',
                            place4: 'empty',
                            place5: 'empty',
                            place6: 'empty',
                            place7: 'empty',
                            place8: 'empty',
                            place9: 'empty',
                            place10: 'empty',
                            place11: 'empty',
                            place12: 'empty',
                            place13: 'empty',
                            place14: 'empty'
                         });
                        }else if(amount == '16'){
                            firebase.database().ref("/rooms/"+bracketName+'/users/').update({
                                place1: 'empty',
                                place2: 'empty',
                                place3: 'empty',
                                place4: 'empty',
                                place5: 'empty',
                                place6: 'empty',
                                place7: 'empty',
                                place8: 'empty',
                                place9: 'empty',
                                place10: 'empty',
                                place11: 'empty',
                                place12: 'empty',
                                place13: 'empty',
                                place14: 'empty',
                                place15: 'empty',
                                place16: 'empty',
                                place17: 'empty',
                                place18: 'empty',
                                place19: 'empty',
                                place20: 'empty',
                                place21: 'empty',
                                place22: 'empty',
                                place23: 'empty',
                                place24: 'empty',
                                place25: 'empty',
                                place26: 'empty',
                                place27: 'empty',
                                place28: 'empty',
                                place29: 'empty',
                                place30: 'empty'
                             });
                        }
                         localStorage.setItem('room_name', bracketName)
                         localStorage.setItem('owner', 'yes');
                         window.location = "bracket.html"
                }
        }
    });
}