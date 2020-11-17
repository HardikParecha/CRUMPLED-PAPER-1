
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1,box2,box3;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(100,100);

	//Create the Bodies Here.

	box1=createSprite(1000, height-65, 200,20);
	box1.shapeColor=color(255,0,0)

	box2=createSprite(width-300,300, 20,100);
	box2.shapeColor=color(255,0,0)

	box3=createSprite(width-100, 300, 20,100);
	box3.shapeColor=color(255,0,0)

	ball=createSprite(width-1000, 330, 20,20);
	ball.shapeColor=color(255,255,255)

	box1 = Bodies.rectangle(1000, 330, 200, 20 , {isStatic:true} );
	World.add(world, box1);

	packageBody = Bodies.circle(width-1000 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();

  ground.display();
 
}
function keyPressed(){
if(keyDown ===UP_ARROW){

}
}


