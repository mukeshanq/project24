const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 paper = new Paper(100,630,20,20);
	 box1 = new Dustbin(600,670,150,30)
	 box2 = new Dustbin(530,650,30,150)
	 box3 = new Dustbin(670,650,30,150)
	
	
	 ground = new Ground(400,690);
    

	Engine.run(engine);
  
}


function draw() {
  background("black");

 // Engine.update(engine);

   paper.display();
   box1.display();
   box2.display();
   box3.display();
   ground.display();

 
   
}
function keyPressed() {
if (keyCode === UP_ARROW)
 { 
	 Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
 }
}