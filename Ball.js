class Ball{
    constructor(){
        var Ball_properties = {
            isStatic: false,
            friction: 10,
            restitution: 0.3,
            density: 1.2
        }
        this.bodies = Bodies.circle(50, 650, 40, Ball_properties)
        this.image = loadImage("paper.png")
        World.add(world, this.bodies)
    }
    display(){
    imageMode(CENTER)
    fill("purple") 
    image(this.image,this.bodies.position.x, this.bodies.position.y, 100, 100)
    }
}