
$(document).ready(function() {
var uid;
var user = firebase.auth().currentUser;

if (user) {
  uid = user.uid;  
} else {
  window.location.replace("http://www.bengubler.com/fluidmove/signin.html");
}
	function sketchProc(processing) {

var userRef = firebase.database().ref('users/');
var xv = 0;
var yv = 0;
var xpos = 200;
var ypos = 200;

var keys = [];
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

function Player (ID, xpos, ypos) {
this.id = ID;
this.xpos = xpos;
this.ypos = ypos;
}

var thisPlayer = new Player(uid, xpos, ypos);

Player.prototype.draw = function () {
processing.ellipse(this.xpos, this.ypos, 30, 30);
};

Player.prototype.movement = function () {
    keyAction();
    xpos = xpos + xv; //setting the positions to the positions + movement
    ypos = ypos + yv;
    this.xpos = xpos;
    this.ypos = ypos;
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
};

processing.draw = function() {
	keyAction();
	thisPlayer.movement();
	
	userRef.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    childSnapshot.key = new Player(childSnapshot.val(), childSnapshot.val().xpos, childSnapshot.val().ypos);
    childSnapshot.key.draw();
    // ...
  });
});
};
	
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

/*
userRef.on('child_removed', function(data) {
  deleteComment(postElement, data.key);
});
*/

