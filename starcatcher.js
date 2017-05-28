

var keys = [];
    	function keyAction () {
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

var Player = {
xv: 0,
yv: 0,
xpos: 200,
ypos: 200,
}

function movement () {
    Player.xpos = Player.xpos + Player.xv; //setting the positions to the positions + movement
    Player.ypos = Player.ypos + Player.yv;
    Player.xv = Player.xv * 0.9; //slowing it down
    Player.yv = Player.yv * 0.9;
}

function sketchProc(processing) {
	
function polygon (sides, centerX, centerY, radius, fillColor, strokeColor) {
    processing.fill(fillColor);
    processing.stroke(strokeColor);
    var innerAngle = 360/sides;
    var rotationAngle = innerAngle;
    processing.beginShape();
    for (var i = 0; i < sides + 2; i++) {
        processing.vertex(centerX + radius*Math.sin(processing.radians(rotationAngle)), centerY + radius*Math.cos(processing.radians(rotationAngle)));
        rotationAngle = innerAngle * i;
	
    }
    processing.endShape();
}

function drawPlayer () {
    processing.fill(255, 255, 255);
    polygon(5, Player.xpos, Player.ypos, 30, 255, 0); //moves the circle
    keyAction();
    movement();
    
}

processing.setup = function() {
	processing.background(0,0,0);
	processing.size($(window).width(),$(window).height());
}
	
processing.draw = function() {
    processing.background(0, 0, 0); //Background
    drawPlayer();
}
$( window ).resize(function() {
  processing.size($(window).width(), $(window).height());
});
}

$(document).ready(function() {
var canvas = document.getElementById("canvas");
var processingInstance = new Processing(canvas, sketchProc);
	
$(document).keydown(function (e) {
    keys[e.which] = true;
	keyAction();
});

$(document).keyup(function (e) {
    delete keys[e.which];
    keyAction();
});
});
