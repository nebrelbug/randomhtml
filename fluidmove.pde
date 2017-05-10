void setup() {
size(400,400);
background(0,0,0);
}
var xv = 0;
var yv = 0;

/*
userRef.on('child_removed', function(data) {
  deleteComment(postElement, data.key);
});
*/

var thisPlayer = new Player(uid, 200, 200);

var Player = function(uid, xpos, ypos) {
  this.ID = uid;
  this.xpos = xpos;
  this.ypos = ypos;
     fill(255, 255, 255);
    ellipse(this.xpos, this.ypos, 30, 30); //moves the circle
};

var keys = [];
void keyAction () {
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

$(document).keydown(function (e) {
    keys[e.which] = true;
});

$(document).keyup(function (e) {
    keys[e.which] = false;
});

Player.prototype.test() {
keyAction();
this.movement();
}


Player.prototype.movement() {
    this.xpos += xv; //setting the positions to the positions + movement
    this.ypos += yv;
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
    firebase.database().ref('users/' + uid).set({
    xpos: this.xpos,
    ypos: this.ypos
  });
}


//Draw function--objects make it possible to add other players in the future
void draw() {
    background(0, 0, 0); //Background
    thisPlayer.test();
    
var userRef = firebase.database().ref('users/');
userRef.on('child_added', function(data) {
  var firebase.database().ref('users/' + data) = new Player(data, data.val().xpos, data.val().ypos);
});

userRef.on('child_changed', function(data) {
  var firebase.database().ref('users/' + data) = new Player(data, data.val().xpos, data.val().ypos);
});

    
    
}
