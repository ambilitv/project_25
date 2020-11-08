class Box{
    constructor(x, y, w, h){
        var Box_properties = {
            restitution: 0.8,
            isStatic: true
        }
        this.bodies= Bodies.rectangle(x, y, w, h, Box_properties)
        World.add(world, this.bodies);
    }
    display(){
        rectMode(CENTER)
        fill(rgb(180, 200, 140))
        rect(this.bodies.position.x, this.bodies.position.y, 200, 20);
    }
}
class Box_tall{
    constructor(g, h, l, b){
        var options = {
            restitution: 0.8,
            isStatic: true
        }
        this.bodies= Bodies.rectangle(g, h, l, b, options)
        World.add(world, this.bodies);
    }
    display(){
        rectMode(CENTER)
        fill(rgb(180, 200, 140))
        rect(this.bodies.position.x, this.bodies.position.y, 20, 100);
    }
}
class Ground{
    constructor(){
        var properties = {
            isStatic: true
        }
        this.bodies = Bodies.rectangle(width/2, 695, width, 10, properties)
        World.add(world, this.bodies)
    }
    display(){
        rectMode(CENTER)
        fill("green")
        rect(this.bodies.position.x, this.bodies.position.y, width, 10)
    }
}