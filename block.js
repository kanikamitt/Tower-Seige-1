class Block{
    constructor(x,y,width,heigth,r,g,b){

        var options={

           
            restitution:0.4,
            friction:0.01
            
        }
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.r=r;
        this.b=b;
        this.g=g;
        this.body=Bodies.rectangle(x,y,width,heigth,options);
        World.add(world,this.body);
     
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill(this.r,this.g,this.b);
        rect(0,0,this.width,this.heigth);
        pop();
    }

}
