class Ground{
  constructor(x,y,width,height){
    var options={
      'restitution':0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    this.x = this.body.position.x;
    this.y = this.body.position.y;
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display(){
    fill("brown");
    push();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}