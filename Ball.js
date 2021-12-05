class Ball {
  constructor(x, y, r) {
    var options = { 
      frictionAir: 0.005,
      restitution : 1.0
    };

    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
    World.add(world, this.body);
  }


  display() {
    
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    
  } 
}


