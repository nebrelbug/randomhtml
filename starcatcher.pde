//By nebrelbug

//Thanks to Drew Bent's Multiple Key Presses and Firedrake969 for giving me the basic movement syntax to program the player. I converted it all into Object-Oriented Format, making it possible to add other players in the future and allowing for a much more reusable format. Also, thanks to John Ingram's spin-off of that project for helping me with the boundaries. Because this isn't really a spin-off of those projects, I didn't create it as a project but am giving credit up here.

//Use the arrow keys to move

//Catch the stars!

//More levels coming soon

//**Feel free to vote up if you like this**:)

//I'm going to embed this in my website.

//setting up variables....


size(400,400);
var difficultyLevel = "Not Defined Yet";
var alive = "not yet";
var timeLeft = "invalid";
var bonusTime = 5000;
var startTime = 0;
var score = 0;
var m = millis();
var starOn = 0;
var starX = random(15,385);
var starY = random(15,385);

var Player = { //Player attributes
xv: 0,
yv: 0,
xpos: 200,
ypos: 200,
};

textAlign(CENTER, CENTER);

var homeButtonPress = function () {
    if (mouseIsPressed) {
        if (mouseX > 0 && mouseX < 40) {
            if (mouseY > 380 && mouseY < 400) {
                Program.restart();
            }
        }
    }
};

var drawHomeScreen = function () {
    background(255, 255, 255);
        fill(0, 0, 0);
        textSize(50);
        text("STAR CATCHER", 200, 115);
        fill(0, 0, 0);
        rect(50, 240, 100, 40, 10);
        rect(250, 240, 100, 40, 10);
        fill(255, 255, 255);
        textSize(20);
        text("EASY", 100, 260);
        text("HARD", 300, 260);
};

var playButtonPressed = function () {
    if (mouseIsPressed) {
        if(mouseY > 240 && mouseY < 280) {
            if (mouseX > 50 && mouseX < 150) {
                alive = 1;
                startTime = m;
                difficultyLevel = 5000;
            } else if (mouseX > 250 && mouseX < 350) {
                alive = 1;
                startTime = m;
                difficultyLevel = 2000;
            }
        }
    }
};

var restartButtonPress = function () {
    if (mouseIsPressed) {
        if(mouseY > 280 && mouseY < 320) {
            if (mouseX > 150 && mouseX < 250) {
                Program.restart();    
            }
        }
    }
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

var touchTester = function () {
    if (dist(starX, starY, Player.xpos, Player.ypos)<12) {
        score = score + 1;
        starOn = 0;
        bonusTime = bonusTime + difficultyLevel;
    }
};

var timeLimit = function () {
            text("Time: " + timeLeft, 50, 50);
            if (timeLeft<0) {
                alive = 0;
            }
        };

var movement = function () {
    if (Player.xpos > 385) {
        Player.xpos = 2*385 - Player.xpos;
        Player.xv = -0.3*Player.xv;
    }
    if (Player.xpos <  15) {
        Player.xpos = 2* 15 - Player.xpos;
        Player.xv = -0.3*Player.xv;
    }
    if (Player.ypos > 385) { //If y is past bottom edge of screen
        Player.ypos = 2*385 - Player.ypos;
        Player.yv = -0.3*Player.yv; //Set bounceback
    }
    if (Player.ypos <  15) {
        Player.ypos = 2* 15 - Player.ypos;
        Player.yv = -0.3*Player.yv;
    }
    Player.ypos = Player.ypos + Player.yv;
    Player.xpos = Player.xpos + Player.xv;
    Player.xv = Player.xv * 0.9; //Slow it down--will never reach zero, but get infinitesmally close
    Player.yv = Player.yv * 0.9;
};

var drawPlayer = function () {
    fill(255, 255, 255);
    ellipse(Player.xpos, Player.ypos, 30, 30); //Draws circle
    keyTester();//Check for keys pressed
    movement();//Change position of circle
    
    
};

    var dispDeathScreen = function () {
        background(0,0,0);
        fill(255, 255, 255);
        textSize(30);
        textAlign(CENTER, CENTER);
        text("YOU LOST", 200, 35);
        text("Your score was " + score, 200, 75);
        text("Comment on it!", 200, 115);
        fill(255, 255, 255);
        rect(150, 280, 100, 40, 10);
        fill(0, 0, 0);
        textSize(20);
        text("RESTART", 200, 300);
    };

    var dispScore = function () {
        fill(255, 255, 255);
        textSize(20);
        text("Score: " + score, 50, 25);
        
    };
    
    var dispStar = function () {
        if (starOn === 0 ) {
        fill(255, 242, 0);
        starX = random(15,385);
        starY = random(15,385);
        ellipse(starX, starY, 10, 10);
        starOn = 1;
        } else {
        fill(255, 242, 0);
        ellipse(starX, starY, 10, 10);
        starOn = 1;
        }
            
    };
//Draw function--objects make it possible to add other players in the future
void draw = function() {
    m = millis();//sets m to the # of milliseconds
    if (alive === 1) { //IF PLAYER IS ALIVE
    background(0, 0, 0); //Background
    dispStar(); //Show star
    drawPlayer(); //Show Player
    dispScore(); //Show score
    touchTester(); //Check if player is touching star
    timeLeft = round((bonusTime - (m - startTime))/1000);
    timeLimit();
    fill(255, 0, 0);
    textSize(27);
    text("⌂", 15, 385);
    homeButtonPress();
    } if (alive === 0) { //IF PLAYER DIED
        dispDeathScreen();
        restartButtonPress();
    } if (alive === "not yet") { //IF PLAYERS ON HOMESCREEN
        drawHomeScreen();
        playButtonPressed();
    }
};
