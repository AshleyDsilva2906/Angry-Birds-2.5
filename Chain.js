class chain{
    constructor(BodyA,BodyB){
var options={
bodyA:BodyA,
bodyB:BodyB,
stiffness:0.04,length:10
}
this.body=constraint.create(options)
World.add(world,this.body)
    }
display(){
    var pointA = this.body.bodyA.position
    var pointB = this.body.bodyB.position
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}
