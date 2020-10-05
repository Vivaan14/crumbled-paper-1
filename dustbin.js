class dustbin {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.image = loadImage("dustbingreen.png")
        this.angle = 0;
        this.bottomBody = Bodies.rectangle(this.x,this. y,this.dustbinWidth,this.wallThickness
        ,{isStatic:true});
        this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth/2,this. y-this.dustbinHeight/2
        ,this.wallThickness,this.dustbinHeight,{isStatic:true})
    Matter.Body.setAngle(this.leftWallBody,this.angle);
        this.RightWallBody = Bodies.rectangle(this.x + this.dustbinWidth/2,this. y-this.dustbinHeight/2
            ,this.wallThickness,this.dustbinHeight,{isStatic:true})
            Matter.Body.setAngle(this.RightWallBody,-1*this.angle);
        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.RightWallBody);
            }
        display(){
        var bottomPos = this.bottomBody.position;
        var rightPos = this.RightWallBody.position;
        var leftPos = this.leftWallBody.position;
        push();
        translate(leftPos.x,leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(rightPos.x,rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(bottomPos.x,bottomPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rect(0,0,this.dustbinWidth,this.wallThickness);
        pop();
        }
        }
