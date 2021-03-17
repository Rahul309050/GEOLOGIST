const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

// ball (rubber)
    var ball_options ={
      restitution: 0.3,
      friction:5,
      density:1
  }

  ball = Bodies.circle(290,100,20, ball_options);
  World.add(world,ball);
//  ground
  var ground_options ={
    isStatic: true
}

ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);
// hammer
var hammer_options ={
  restitution:0.5,
  density:2,
  friction:1.0
}

hammer = Bodies.rectangle(200,90,50,20,hammer_options);
World.add(world,hammer);
// stone
var stone_options ={
  isStatic:true,
  restitution:0,
  density:0.5,
  friction:0,
}

stone = Bodies.rectangle(210,0,20,20,stone_options);
World.add(world,stone);
}

function draw(){
  background("lightblue");
  Engine.update(engine);
  // ball(rubber)
    strokeWeight(4);
    stroke("black");
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 25, 25);
  // ground
  fill("red");
  strokeWeight(0)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
 //hammer 
  fill("yellow");
  strokeWeight(2);
  stroke("white")
  rectMode(CENTER);
  rect(hammer.position.x,hammer.position.y,100,20);
  // stone
  fill("black");
  strokeWeight(0)
  // rectMode(CENTER);
  rotate(60)
  rect(stone.position.x,stone.position.y,70,70);
}

