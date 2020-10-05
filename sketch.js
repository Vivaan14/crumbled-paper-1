
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var crumbledPaper;
var dustbin1;
var ground1;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
crumbledPaper = new paper(200,450,70);
crumbledPaper.shapeColor="red";
ground1 = new line(width/2,670,width,20);

dustbin1= new dustbin(1200,650);
var render = Render.create(
{element:document.body,
engine:engine,options:{
width:1200,
height:700,
wireframes:false,
}}
);
	Engine.run(engine);
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
 crumbledPaper.display();
 ground1.display();
 dustbin1.display();
 }
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumbledPaper.body,crumbledPaper.body.position,{x:85,y:-85});}
}



