var firebaseConfig = {
    apiKey: "AIzaSyBO3FMXfsSL3m6tep569LdzwJdV0GsVC8Q",
    authDomain: "kwitter-f0dfc.firebaseapp.com",
    databaseURL: "https://kwitter-f0dfc-default-rtdb.firebaseio.com",
    projectId: "kwitter-f0dfc",
    storageBucket: "kwitter-f0dfc.appspot.com",
    messagingSenderId: "135668714361",
    appId: "1:135668714361:web:b224c58b29327923773da8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom() {
       room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
         localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
         } 
         
         function getData() { firebase.database().ref("/").on('value', function(snapshot)
          { document.getElementById("output").innerHTML = "";
           snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
            console.log("Room Name - " + Room_names);
             row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row; }); }); }
              
              getData(); function redirectToRoomName(name) { console.log(name);
 localStorage.setItem("room_name", name);window.location = "kwitter_page.html"; 
} function logout() { localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name")
; window.location = "kwitter.html"; }