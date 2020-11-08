var box1, box2, box3;  
var floor;
var dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  dustbinImg = loadImage("dustbingreen.png")
}


function setup() {
	createCanvas(1500, 700);
  rectMode(CENTER)
  
  engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  box1 = new Box(1350, 680, 20, 20);
  box2 = new Box_tall(1240, 640, 20, 20);
  box3 = new Box_tall(1440, 640, 20, 20);
  paper = new Ball()
  floor = new Ground()
  bin = new Bin()
	Engine.run(engine);
  
}


function draw() {
  background("white");
  floor.display()
  paper.display()
  box1.display()
  box2.display()
  box3.display()
  bin.display()
  myForce()
  drawSprites();
 textSize(25)
 fill("green")
 stroke("violet")
  text("PRESS UP ARROW KEY TO MAKE THE BALL GO UP AND DOWN ARROW KEY TO BRING IT DOWN", 150, 50);
}
function myForce(){
if(keyCode===UP_ARROW){
  Body.applyForce(paper.bodies,paper.bodies.position,{x:3,y:-15})
}
}