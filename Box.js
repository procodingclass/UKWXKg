class Box {

  constructor(x, y, w, h) {
    var options = {
        frictionAir: 0.005,
        restitution:1.2,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);

    this.width = w;
    this.height = h;

    World.add(world, this.body);
  }


  display(){

    rect(this.body.position.x, this.body.position.y, this.width, this.height);

  }
}
