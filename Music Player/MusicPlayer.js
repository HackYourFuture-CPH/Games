var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 40;
var x = ballRadius+20;
var y = canvas.height-ballRadius-20;
var fallx= ballRadius+20;
var fally = 0;
var dx = 2;
var dy = 2;
var controlCircles = ["#f4ee41", "#70db13", "#1d8fe0", "#a71adb", "#e01825"];
//yellow =0, green=1, blue=2, purple=3, red=4
var numberOfControlPoints = 5;
var score = 0;
//Circle button booleans
var bluePressed = false;
var yellowPressed = false;
var greenPressed = false;
var purplePressed = false;
var redPressed = false;

//Easter egg variables
var easterEgg = false;
var c_pressed=false;
var h_pressed=false;
var o_pressed=false;
var k_pressed=false;
var l_pressed=false;
var t_pressed=false;
var e_pressed=false;

var rand_circle = randomIntFromInterval(0,4);
var recirclepoint = randomIntFromInterval(100, 500);
var circleColor1=0;
var fally2=-120;
var circleColor2= 1;
var fally3=-240;
var circleColor3= 2;
var fally4=-360;
var circleColor4= 3;
var fallx2= ballRadius+120;
var fallx3= ballRadius+220;
var fallx4 = ballRadius+320;
var fallx5= ballRadius+420;

//5 control points drawn individually
function drawControlCircles(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[0];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x+100, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[1];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x+200, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[2];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x+300, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[3];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x+400, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[4];
  ctx.fill();
  ctx.closePath();

}

document.addEventListener("keydown", keyDownHandler, false);


function keyDownHandler(e) {
    if(e.keyCode == 65) { //a button
      yellowPressed = true;
    }
    if(e.keyCode == 83) { // s button
      greenPressed =true;
    }
    if(e.keyCode == 68) { // d button
      bluePressed=true;
    }
    if(e.keyCode == 70) { // f button
        purplePressed = true;
    }
    if(e.keyCode == 71) { // g button
        redPressed = true;
    }
    if(e.keyCode == 67){ // c
      c_pressed=true;
    }
    if(e.keyCode==72){ // h
      h_pressed=true;
    }
    if(e.keyCode == 79){ //o
      o_pressed=true;
    }
    if(e.keyCode == 75){//k
      k_pressed=true;
    }
    if(e.keyCode == 76){//l
      l_pressed=true;
    }
    if(e.keyCode == 84){//t
      t_pressed=true;
    }
    if(e.keyCode == 69){//e
      e_pressed=true;
    }
    if(e.keyCode==81){ //q pressed
      c_pressed=false;
      h_pressed=false;
      o_pressed=false;
      k_pressed=false;
      l_pressed=false;
      t_pressed=false;
      e_pressed=false;
    }
}

//Returns a random number between given max and min points
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var randomStartPoint = randomIntFromInterval(0,100);

/*
var fallingCircles = [];
for(c=0; c<5; c++) {
    fallingCircles[c] = [];
    for(r=0; r<3; r++) {
        fallingCircles[c][r] = { x:0 , y: 0, color: "#f4ee41"};
    }
}*/



//Each falling circle needs to be drown individually
function drawFallingCircles(){

  ctx.beginPath();
  ctx.arc(fallx, fally, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor1];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx, fally2, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor2];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx, fally3, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor3];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx, fally4, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor4];
  ctx.fill();
  ctx.closePath();
}

//A new function for every column
function drawFallingCirclesColumnTwo(){

  ctx.beginPath();
  ctx.arc(fallx2, fally, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor1];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx2, fally2, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor2];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx2, fally3, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor3];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx2, fally4, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor4];
  ctx.fill();
  ctx.closePath();
}

function drawFallingCirclesColumnThree(){

  ctx.beginPath();
  ctx.arc(fallx3, fally, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor1];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx3, fally2, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor2];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx3, fally3, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor3];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx3, fally4, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor4];
  ctx.fill();
  ctx.closePath();
}

function drawFallingCirclesColumnFour(){

  ctx.beginPath();
  ctx.arc(fallx4, fally, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor1];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx4, fally2, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor2];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx4, fally3, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor3];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx4, fally4, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor4];
  ctx.fill();
  ctx.closePath();
}

function drawFallingCirclesColumnFive(){

  ctx.beginPath();
  ctx.arc(fallx5, fally, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor1];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx5, fally2, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor2];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx5, fally3, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor3];
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(fallx5, fally4, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = controlCircles[circleColor4];
  ctx.fill();
  ctx.closePath();
}



function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawControlCircles();
  drawFallingCircles();
  drawFallingCirclesColumnTwo();
  drawFallingCirclesColumnThree();
  drawFallingCirclesColumnFour();
  drawFallingCirclesColumnFive();
  drawScore();

    if(yellowPressed ){ //A button
      if(((fally > y-5) && (fally < y+5) && circleColor1 == 0) || //5 pixel added for control to make it easier
         ((fally2 > y-5) && (fally2 < y+5) && circleColor2 == 0) ||
         ((fally3 > y-5) && (fally3 < y+5) && circleColor3 == 0) ||
         ((fally4 > y-5) && (fally4 < y+5) && circleColor4 == 0)) {
        var sound = new Howl({src: ['sounds/clay.mp3']}).play();
        score ++;
      }
    }

    if(greenPressed ){ // S button
      if(((fally > y-5) && (fally < y+5) && circleColor1 == 1) || //5 pixel added for control to make it easier
         ((fally2 > y-5) && (fally2 < y+5) && circleColor2 == 1) ||
         ((fally3 > y-5) && (fally3 < y+5) && circleColor3 == 1) ||
         ((fally4 > y-5) && (fally4 < y+5) && circleColor4 == 1)) {
        var sound = new Howl({src: ['sounds/bubbles.mp3']}).play();
        score ++;
      }
    }

    if(bluePressed ){ // D button
      if(((fally > y-5) && (fally < y+5) && circleColor1 == 2) || //5 pixel added for control to make it easier
         ((fally2 > y-5) && (fally2 < y+5) && circleColor2 == 2) ||
         ((fally3 > y-5) && (fally3 < y+5) && circleColor3 == 2) ||
         ((fally4 > y-5) && (fally4 < y+5) && circleColor4 == 2)) {
        var sound = new Howl({src: ['sounds/confetti.mp3']}).play();
        score ++;
      }
    }

    if(purplePressed ){ // F button
      if(((fally > y-5) && (fally < y+5) && circleColor1 == 3) || //5 pixel added for control to make it easier
         ((fally2 > y-5) && (fally2 < y+5) && circleColor2 == 3) ||
         ((fally3 > y-5) && (fally3 < y+5) && circleColor3 == 3) ||
         ((fally4 > y-5) && (fally4 < y+5) && circleColor4 == 3)) {
        var sound = new Howl({src: ['sounds/corona.mp3']}).play();
        score ++;
      }
    }
    if(redPressed ){ // G button
      if(((fally > y-5) && (fally < y+5) && circleColor1 == 4) || //5 pixel added for control to make it easier
         ((fally2 > y-5) && (fally2 < y+5) && circleColor2 == 4) ||
         ((fally3 > y-5) && (fally3 < y+5) && circleColor3 == 4) ||
         ((fally4 > y-5) && (fally4 < y+5) && circleColor4 == 4)) {
        var sound = new Howl({src: ['sounds/ufo.mp3']}).play();
        score ++;
      }
    }

    if (c_pressed && h_pressed && o_pressed && k_pressed && l_pressed && t_pressed &&e_pressed) {
      var sound = new Howl({src: ['sounds/plug-in.mp3']}).play();
    //  var sound2 = new Howl({src: ['sounds/helloWorld.mp3']}).play();
      var sound3 = new Howl({src: ['sounds/chokolate.mp3']}).play();
      c_pressed=false;
      h_pressed=false;
      o_pressed=false;
      k_pressed=false;
      l_pressed=false;
      t_pressed=false;
      e_pressed=false;
    }


    else if (fally == canvas.height+ballRadius) {
      fally=0;

    }
  if(fally > canvas.height-ballRadius){
      fally =0;
      circleColor1=randomIntFromInterval(0,4); //assigns a new random color

  }
  if(fally2 > canvas.height-ballRadius){
      fally2=0;
      circleColor2=randomIntFromInterval(0,4);//assigns a new random color

  }
  if(fally3 > canvas.height-ballRadius){
      fally3=0;
      circleColor3=randomIntFromInterval(0,4);//assigns a new random color


  }
  if(fally4 > canvas.height-ballRadius){
      fally4=0;
      circleColor4=randomIntFromInterval(0,4);//assigns a new random color


  }

  fally +=dy;
  fally2 +=dy;
  fally3 +=dy;
  fally4 +=dy;
  bluePressed = false;
  yellowPressed = false;
  greenPressed = false;
  purplePressed = false;
  redPressed = false;
  easterEgg=false;
  requestAnimationFrame(draw);

}

draw();
