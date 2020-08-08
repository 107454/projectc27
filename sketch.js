
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.Constraint;
const Constraint = Matter.Constraint
var ball1, ball2, ball3, ball4, ball5, roofObject
var string1, string2, string3, string4, string5
var world
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	ballDiameter=40;

	startBallPositionX=width/2;
	startballPositionY=height/4+500;
	ball1=new ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);
	ball2=new ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
	ball3=new ball(startballPositionX,startballPositionY,ballDiameter);
	ball4=new ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
	ball5=new ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	string1=new string(ball1.body,roofObject.body,-ballDiameter*2, 0)

	string2=new string(ball2.body,roofObject.body,-ballDiameter*1, 0)
	string3=new string(ball3.body,roofObject.body,0, 0)
	string4=new string(ball4.body,roofObject.body,ballDiameter*1, 0)
	string5=new string(ball5.body,roofObject.body,ballDiameter*2, 0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()	
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
}

function keyPressed() {
  	if (keyCode === SPACE) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	ballBodyPosition=constraint.bodyA.position
	roofObjectBodyPosition=constraint.bodyB.position

	roofObjectBodyOffset=constraint.pointB;
	
	roofObjectBodyX=roofObjectBodyPosition.x+roofObjectBodyOffset.x
	roofObjectBodyY=roofObjectBodyPosition.y+roofObjectBodyOffset.y
	line(ballBodyPosition.x, ballBodyPosition.y, roofObjectBodyX,roofObjectBodyY);
}	




