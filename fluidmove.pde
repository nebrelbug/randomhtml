var Player = {
xv: 0,
yv: 0,
xpos: 200,
ypos: 200,
};

var keys = [];

var keyPressed = function() { 
  keys[keyCode] = true;
};
 
var keyReleased = function() { 
  keys[keyCode] = false; 
};

var keyTester = function () {
    if (keyIsPressed && keys[UP]) { //this checks if up arrow is pressed
        Player.yv = Player.yv - 1;
    }
    if (keyIsPressed && keys[DOWN]) {
        Player.yv = Player.yv + 1;
    }
    if (keyIsPressed && keys[LEFT]) {
        Player.xv = Player.xv - 1;
    }
    if (keyIsPressed && keys[RIGHT]) {
        Player.xv = Player.xv + 1;
    }
};

var movement = function () {
    Player.xpos = Player.xpos + Player.xv; //setting the positions to the positions + movement
    Player.ypos = Player.ypos + Player.yv;
    Player.xv = Player.xv * 0.9; //slowing it down
    Player.yv = Player.yv * 0.9;
};

var drawPlayer = function () {
    fill(255, 255, 255);
    ellipse(Player.xpos, Player.ypos, 30, 30); //moves the circle
    keyTester();
    movement();
    
};

//Draw function--objects make it possible to add other players in the future
var draw = function() {
    background(0, 0, 0); //Background
    drawPlayer();
};
