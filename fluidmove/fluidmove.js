$(document).ready(function() {
var provider = new firebase.auth.GoogleAuthProvider();
var uid;
var xv = 0;
var yv = 0;
var xpos = 200;
var ypos = 200;
var changeRef = firebase.database().ref('users/');
var keys = [];
	
$( "#signIn" ).click(function() {

firebase.auth().signInWithRedirect(provider);

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
});
	
	
	
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
	uid = user.uid;
    	function sketchProc(processing) {
		
processing.setup = function() {
	processing.background(0,0,0);
	processing.size(800,800); 
};

    	function keyAction () {
    if (keys[38]) { //this checks if up arrow is pressed
        yv = yv - 1;
    }
    if (keys[40]) {
        yv = yv + 1;
    }
    if (keys[37]) {
        xv = xv - 1;
    }
    if (keys[39]) {
        xv = xv + 1;
    }
}

function movement () {
    keyAction();
    xpos = xpos + xv; //setting the positions to the positions + movement
    ypos = ypos + yv;
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
    firebase.database().ref('users/' + uid).set({
    xpos: xpos,
    ypos: ypos
  });
}

processing.draw = function() {
	movement();
};
		
changeRef.on('value', function(snapshot) {
   processing.background(0,0,0);
  snapshot.forEach(function(childSnapshot) {
    processing.fill(255);
    processing.ellipse(childSnapshot.val().xpos, childSnapshot.val().ypos, 30, 30);
  });
});
		
$(document).keydown(function (e) {
    keys[e.which] = true;
	keyAction();
});

$(document).keyup(function (e) {
    keys[e.which]= false;
    keyAction();
});
};		

var canvas = document.getElementById("canvas");
var processingInstance = new Processing(canvas, sketchProc);
	
  } else {
    // User is signed out.
    // ...
  }
});
	
	
	

});
//V 2.5
