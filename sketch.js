const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var box1, box2, box3,ground;
var ball;

function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;


ball = new Ball(100, 100, 40, 40);
  
console.log(ball);

  ground = new Box(300, 380, 600, 20);
  
  Body.setStatic(ground.body, true);
  
  box1 = new Box(300, 100, 70, 70);
  box2 = new Box(310, 150, 70, 70);
  box3 = new Box(300, 100, 70, 70);
  
 

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  ball.display();
}




