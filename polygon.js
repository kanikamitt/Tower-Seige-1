class Polygon{
    constructor(bodyA,pointB){
        var option={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.05,
          length:1
        }
       
        this.rope=Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.rope) 
    }
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){
      var pos=this.rope.bodyA.position
      var pos2=this.pointB
      stroke("blue");
      line(pos.x,pos.y,pos2.x,pos2.y);
        }
    }
}
/*class Polygon{

    constructor(bodyA,pointB){

        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:1
        }

        this.bodyA=bodyA;
        this.pointB=pointB;

        this.sling=Constraint.create(option);
        World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){

     if(this.sling.bodyA){
       var pos =this.sling.bodyA.position
       var posB= this.pointB
       line (pos.x,pos.y,posB.x,posB.y);
     }
    }
}*/