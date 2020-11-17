class Ground {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 1200,10, options);
      this.width = 1200;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      
      rect(600, 350, this.width, this.height);
      
    }
  };
  