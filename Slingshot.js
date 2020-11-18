class Slingshot {
    constructor(bodya,pointb){
        var options ={
            bodyA:bodya,
            pointB:pointb,
            stiffness:0.05,
            length:10
        }
        this.pointb=pointb ;
        this.Slingshot=Constraint.create(options);
        World.add(world,this.Slingshot);
    }
    display(){
        if(this.Slingshot.bodyA){
        var pointa= this.Slingshot.bodyA.position;
        var pointb= this.pointb;
        strokeWeight(7);
        line(pointa.x,pointa.y,pointb.x,pointb.y);
        }
        }
        fly(){
            this.Slingshot.bodyA=null;
        }
    }
