const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var gameState;

function preload() {
  img = loadImage("h.jpg");
  img1 = loadImage("f.jpg");
  img2 = loadImage("a.png");
}

// - Copy

function setup() {
  createCanvas(1000,600);
   engine = Engine.create();
    world = engine.world;
    gameState = "ready";
}

function draw() {
  background(246,232,177);
  Engine.update(engine); 

  if(gameState === "ready"){
    image(img,0,0,750,600);
    gameState = "fade";
  }

  if (keyCode === 39 && gameState === "fade"){
  image(img1,0,0,750,600);
  gameState = "z";
  }

  if(keyCode === 39 && gameState === "z"){
    image(img2,0,0,750,600);
  }
 
    textSize(24);
    textFont("Times New Roman");
    text("Happy Father's Day",775,75);
    textFont("Times New Roman");
    text("To You",830,100);
    text("This is for you dad",780,170);
    textFont("Times New Roman");
    textSize(30);
    text("😘     🥳",810,260);
    textSize(20);
    textFont("Times New Roman");
    text("Press the right arrow key",775 ,360);
    text("for a beautiful note",797,385)
    textFont("Times New Roman");
    text("Press the left arrow key ",775 ,435);
    text("for previous note",797,460)
     textFont("Times New Roman");
     text("Press the down arrow key",775,510);
     text("to go to the starting",797,535)

  drawSprites();
}

// if(gameState === "y"){
//   image(img,0,0,750,600);
// }

// if(keyCode === 32){
//   gameState = "y";
// }
// if(img1,0,0,750,600 && keyCode === 39){
//   ;
// }

// if(gameState === "z"){
  
// }