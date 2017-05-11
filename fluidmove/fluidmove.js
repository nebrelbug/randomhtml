$(document).ready(function() {
var uid;
var user = firebase.auth().currentUser;
var xv = 0;
var yv = 0;
var xpos = 200;
var ypos = 200;
var userRef = firebase.database().ref('users/');
var keys = [];

if (user!=null) {
  uid = user.uid;
firebase.database().ref('users/' + uid).set({
    xpos: xpos,
    ypos: ypos
  });
} else {
  window.location.replace("http://www.bengubler.com/fluidmove/signin.html");
}
	function sketchProc(processing) {
		
processing.setup = function() {
	processing.background(0,0,0);
	processing.size(400,400); 
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
	keyAction();
	movement();
};

userRef.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    processing.fill(0,0,0);
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
	
});
//V 1.8
