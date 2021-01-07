class Box{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }
    display(){
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
    }
}