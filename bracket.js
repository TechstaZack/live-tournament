var roomName = localStorage.getItem('room_name')

function password() {
    firebase.database().ref("/rooms/"+roomName).orderByChild("havepassword").equalTo('yes').once("value",snapshot => {
        if (snapshot.exists()){
          document.getElementById("error").innerHTML = "Account with username already exists!";
        }else{
            firebase.database().ref("/rooms/"+roomName).orderByChild("active").equalTo('no').once("value",snapshot => {
                if (snapshot.exists()){

                }else{
                    
                }
            })
        }
    });
}