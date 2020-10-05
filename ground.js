class line{
constructor(x,y,width,height){
var options ={
isStatic:true
}
this.x = x;
this.y = y;
this.height=height;
this.width=width;
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(world,this.body);
}
display(){
var groundpos = this.body.position;
push();
translate(groundpos.x,groundpos.y);
rectMode(CENTER);
strokeWeight(3);
fill("red");
rect(0,0,this.width,this.height);
pop()
}
}