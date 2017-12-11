


function Particles() {

  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 6; //the max speed is the highest range of speed it can go up to.
  this.h = 0;



  this.prevPos = this.pos.copy(); //this is the visualisation of how the pattern of the flow field forms together.

    this.update = function () {
      this.vel.add(this.acc);
      this.vel.limit(this.maxspeed);
      this.pos.add(this.vel);
      this.acc.mult(0); //this is all about the velocity of  the flowfield, adjusting the multitude and max speed will create a much more faster flow.
    }

      this.follow = function(vectors){
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force); //

      }

    this.applyForce = function(force)   {
        this.acc.add(force);

    }

    this.show = function() {
      stroke(r, g, b, 10);
      this.h = this.h + 1;
      if (this.h > 255); {
        this.h = 0; // show functions displayes the particles in movement over time.
      }
      strokeWeight(2);
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      //point();
      this.updatePrev();

    }
    this.updatePrev = function () {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y; //this updates the stroke so when leaving the canvas it knows to return to it but on the oppopsite side.

    }
    this.edges = function() {
        if (this.pos.x > width) {
          this.pos.x = 0;
          this.updatePrev();

        if (this.pos.x < 0) {
          this.pos.x = width;
          this.updatePrev();
      }
        if (this.pos.y > height) {
        this.pos.y = 0;
        this.updatePrev();
      }
        if (this.pos.y < 0) {
           this.pos.y = height;
           this.updatePrev(); 
      }

    }

  }

}
