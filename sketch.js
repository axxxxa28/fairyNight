const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bgImage;
var fairy;



function preload()
{
   //preload the images here
   bgImage = loadImage("sprites/starnight.png");
   fairy = loadImage("sprites/fairy1.png");
}

function setup() {
  var canvas = createCanvas(800, 750);
  engine= Engine.create();
  world= engine.world;
  
  
  
}


function draw() {
  background(bgImage);
  Engine.update(engine);
  
}