class Ball{
  constructor(x,y,width,height){
    var options={
      isStatic:false,
      restitution:0.3,
      friction: 0.5,
      density: 1.2
    }
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    this.x = this.body.position.x;
    this.y = this.body.position.y;
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display(){
    fill("white");
    push();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}