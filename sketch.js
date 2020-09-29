

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, bin1, bin2, bin3;
var ground, ballBody;

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(70,130,10,10);
	bin1 = new Bin(630,585,20,100);
	bin2 = new Bin(720,625,200,20);
	bin3 = new Bin(810,585,20,100);

	ground = new Ground(500,640,1010,10);
	World.add(world, ground);

	ballBody = Bodies.circle(70 , 130 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, ballBody);
	

	Engine.run(engine);
}

function draw() {
	background("white");
	ball.x= ballBody.position.x 
	ball.y= ballBody.position.y 
	ball.display();
	bin1.display();
	bin2.display();
	bin3.display();
	ground.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.setStatic(ballBody, false);	
	}
}