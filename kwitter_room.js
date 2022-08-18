
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCeWmdqRE9uf2jGZ_IRN7WrvFbf0mgj0v8",
      authDomain: "kwitter-9a1c6.firebaseapp.com",
      projectId: "kwitter-9a1c6",
      storageBucket: "kwitter-9a1c6.appspot.com",
      messagingSenderId: "159476299721",
      appId: "1:159476299721:web:58b6621a186eb316065a18",
      measurementId: "G-TG4Z1FXLXT"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
