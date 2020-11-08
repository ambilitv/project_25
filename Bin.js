class Bin{
    constructor(){
        var properties = {
            isStatic:true
        }
        this.bodies= Bodies.rectangle(1340, 590, 200, 100, properties)
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.bodies)
    }
    display(){
       imageMode(CENTER)
       image(this.image,this.bodies.position.x, this.bodies.position.y, 260, 200)
    }
}