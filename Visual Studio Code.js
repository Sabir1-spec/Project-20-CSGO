
var fixedrect,movingrect ;

function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(600,400,50,80);
  fixedrect.shapeColor = "green";

  movingrect = createSprite(400,200,80,30);
movingrect.shapeColor = "green";
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background('pink');  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  console.log(movingrect.x - fixedrect.x);

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
    movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 && 
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {
    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"
  }

  if

  else {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";


  }

  drawSprites();
}
