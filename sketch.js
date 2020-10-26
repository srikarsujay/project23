var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,right,bottom;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var ground_options ={
        isStatic: true
    }
	left=createSprite(width/2-100,620,20,100)
	right=createSprite(width/2+100,620,20,100)
	bottom=createSprite(width/2,650,200,20)
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25, {friction:2, isStatic:true});
	World.add(world, packageBody);
	
   leftbody=Bodies.rectangle(width/2-100,620,20,100,{isStatic:true})
   World.add(world,leftbody)
   rightbody=Bodies.rectangle(width/2+100,620,20,100,{isStatic:true})
   World.add(world,rightbody)
    bottombody=Bodies.rectangle(width/2,650,200,20,{isStatic:true})
   World.add(world,bottombody)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false)
	 }
   }



