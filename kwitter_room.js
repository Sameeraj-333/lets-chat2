user_name = localStorage.getItem('user_name');
greeting = "Welcome " + user_name + "!";
console.log(greeting);
document.getElementById('welcome').innerHTML = greeting;




  var firebaseConfig = {
    apiKey: "AIzaSyBCm42pWzTX2mBTeU7XI5UxHIBc9tync1s",
    authDomain: "lets-chat-d54d6.firebaseapp.com",
    projectId: "lets-chat-d54d6",
    storageBucket: "lets-chat-d54d6.appspot.com",
    messagingSenderId: "348456468850",
    appId: "1:348456468850:web:356026221ade29f5261deb",
    measurementId: "G-T5Z6SCNMQD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
