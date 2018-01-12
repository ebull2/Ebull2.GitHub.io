//http://api.openweathermap.org


let locationArray = ["Plymouth, GB", "Soorts-Hossegor, FR", "Peniche, PT", "Gold Coast, AU", "California, US", "Jeffreys Bay, ZA"]; //Array of locations I will be using.
let randomLocation;
let apiKey = "6b4a465ac9894c63172283b3f271c20c"; //apiKey of the source i will be colecting the data from.
let weather;
let length;
let sel;
let selValue;

//These are the values of how the viusalisation will take place.
var xspacing = 5;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;
var amplitude = 200.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave




function preload() {
  //randomLocation stores just one city that is returned from the locationArray
  randomLocation = locationArray[round(random(locationArray.length-1))]; //This will return the location back to it's previous one.
  let url = "http://api.openweathermap.org/data/2.5/weather?q="+randomLocation+"&units=metric&appid="+apiKey; //Source of the apiKey.
  weather = loadJSON(url);
}

function setup() {


console.log("Location: " + randomLocation) //Show the location we are searching
console.log("Pressure: " + weather.main.pressure); //Pressure

  var canvas = createCanvas (1280, 720);
 canvas.parent("canvasContainer");
  textAlign(LEFT);
  textSize(40);
  fill(255);
  /*
  sel = createSelect();


  sel.size(100, 50);
  sel.position(150, 135);
  sel.option('select');
  sel.option('Plymouth, GB');
  sel.option('Soorts-Hossegor, FR');
  sel.option('Peniche, PT');
  sel.option('Gold Coast, AU');
  sel.changed(changeData);
  */

  for (let i=weather.main.pressure; i<weather.main.pressure; i++){
    console.log(weather.heights[i].pressure * 600); //Return all JSON data
    let makeSize = weather.heights[i].pressure * 600;
    beginShape();
    ellipse(random(200), random(200), 200, 200);
  }

  noLoop();
}

var noiseScale=0.005;

function draw(){
  for (var x=2; x < width; x++) {
    var noiseVal = noise((weather.main.pressure+x)*noiseScale, mouseY*noiseScale); //size of noise depeding on
    stroke(noiseVal*77, noiseVal*129, noiseVal*227); //wave fill
    line(x, mouseY+noiseVal*600, x, height);
    fill('rgba([179, 255, 179], 0.2)'); //text fill
    text("Location: " + randomLocation, 50, 600);
    text("The Wind pressure " + weather.main.pressure + " hba", 50, 650); //Text of wind pressure and data of it in hba.
  }
}
