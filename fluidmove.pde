$(document).ready(function() {

void setup() {
size(400,400);
}

var Player = {
xv: 0,
yv: 0,
xpos: 200,
ypos: 200,
};

var keys = [];
void keyAction () {
    if (keys[38]) { //this checks if up arrow is pressed
        Player.yv = Player.yv - 1;
    }
    if (keys[40]) {
        Player.yv = Player.yv + 1;
    }
    if (keys[37]) {
        Player.xv = Player.xv - 1;
    }
    if (keys[39]) {
        Player.xv = Player.xv + 1;
    }
}

$(document).keydown(function (e) {
    keys[e.which] = true;
});

$(document).keyup(function (e) {
    delete keys[e.which];
});


void movement() {
    Player.xpos += Player.xv; //setting the positions to the positions + movement
    Player.ypos += Player.yv;
    Player.xv = Player.xv * 0.9; //slowing it down
    Player.yv = Player.yv * 0.9;
}

void drawPlayer() {
    fill(255, 255, 255);
    ellipse(Player.xpos, Player.ypos, 30, 30); //moves the circle
    keyAction();
    movement();
    
}

//Draw function--objects make it possible to add other players in the future
void draw() {
    background(0, 0, 0); //Background
    drawPlayer();
}

});
