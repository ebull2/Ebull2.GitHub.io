
let r = 255;
let g = 255;
let b = 255; // these control the RGB function I will be using to determine the stroke colour.

 var inc  = 0.1; //this determines the
 var scl = 10; //The scale is the ratio of size to width.
 var cols, rows; //this is for the amount of columns and rows the perlin noise will need to hold the particles.
 var zoff = 0; //this makes a 3rd dimension which chops up the x and y dimension throughout time.

 var fr;

 var particles = [];

 var flowfield; //the flowfield is what determines the

 function setup () {
   var canvas = createCanvas (594, 841);
   canvas.parent("canvasContainer");
   cols = floor(width / scl);
   rows = floor(height / scl);
   fr = createP('')

   flowfield = new Array(cols * rows); //this makes sure that the array

   for (var i = 0; i < 2000; i++) { //this determines the amount of particles are displayed in the canvas.

   particles[i] = new Particles(); //this is the function to draw out the particles.


    }

  }

  function keyPressed() {

     clear(); // this function clears the background when a button is pressed.

  }

function draw () {

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) { //this creates the movement of the flowfield by using the z axis.
      var index = ( x + y * cols);
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle); //this creates a vector from an angle.
      v.setMag(20); //the magititude is the distance between the flow of the strokes and what makes the pattern.
      flowfield[index] = v;
      xoff += inc;


      if (mouseIsPressed) {
        r = random(255);
        g = random(255);
        b = random(255);


  }
      stroke(r, g, b, 120);
      //strokeWeight(2);
      //push();
      //translate(x * scl, y * scl);
      //rotate(v.heading());
      //line(0,0, scl, 0);
      //pop(); //these determine the stroke, angle and flow of the patterns.
    }
    yoff += inc;

    zoff += 0.0002; //zoff makes sures the particles stay in between the noise.
  }

    for (var i = 0; i < particles.length; i++) {

    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show(); //this is for all particles to make sure they keep in the canvas and that keep flowing.

  }

    fr.html(floor(frameRate())); //this shows the frame rate of which the interface is doing.

}
