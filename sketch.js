var bg;

function preload(){
bg=loadImage("images/congratulations.jpg")
}

function setup() {

  createCanvas(3000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background("red");
  clues();
  security.display();

}