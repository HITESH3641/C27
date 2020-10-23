class Chain {
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            length:10
        }
    this.chain=Constraint.create(options);
   World.add(world,this.chain)
    }
display(){
    push()
    var body1=this.chain.bodyA.position;
    var body2=this.chain.bodyB.position;
    line(body1.x,body1.y,body2.x,body2.y)
    pop()


}

}