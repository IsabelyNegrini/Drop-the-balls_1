const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

var angle1 = 10;
var angle2 = 30;
var angle3 = 50;

var particles = [];

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var particle_options ={
	restitution: 0.7,
	friction:0.02
	}
    
	for(var i = 0; i < 20; i++){
	var particle = Bodies.circle(400,10,10, particle_options);
	World.add(world,particle);
	particles.push(particle);
	}
	

	block_options ={
	isStatic: true
	}

	var plane_options ={
	isStatic: true
	}

	plane = Bodies.rectangle(400,700,400,20, plane_options);
	World.add(world,plane);

	Block1 = Bodies.rectangle(200,400,200,20, block_options);
	World.add(world,Block1);

	Block2 = Bodies.rectangle(600,400,200,20, block_options);
	World.add(world,Block2);
    
	rotator1 = Bodies.rectangle(400,200,200,20,block_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(400,200,150,20, block_options);
	World.add(world, rotator2);
	
	rotator3 = Bodies.rectangle(400,200,150,20, block_options);
	World.add(world, rotator3);

	particle1 = Bodies.circle(220,10,10, particle_options);
	World.add(world, particle1);

	particle2 = Bodies.circle(220,10,10, particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(220,10,10, particle_options);
	World.add(world, particle3);

	Engine.run(engine);
    

}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine);
  fill("orange");
  rect(plane.position.x,plane.position.y,800,20);

  fill("orange");
  rect(Block1.position.x, Block1.position.y, 150,20);
  rect(Block2.position.x, Block2.position.y, 150,20);


  Matter.Body.rotate(rotator1, angle1);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=1.9;

  Matter.Body.rotate(rotator2, angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=2.6;

  Matter.Body.rotate(rotator3, angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=3.9;
  
 ellipseMode(RADIUS);

  for(var i = 0; i < particles.length; i ++){
  ellipse(particles[i].position.x, particles[i].position.y, 10,10);
 }



  drawSprites();
 
}



