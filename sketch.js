
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  
  rect1 = createSprite(300,200,50,80);
  rect2 = createSprite(400,200,80,50);
  
  rect1.debug  = true;
  rect2.debug = true;
  
  rect2.shapeColor = "black";
  rect1.shapeColor = "black";

  

  
  
  
}

function draw() {
  background("brown");  

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
 
  console.log(rect2.x - rect1.x)


  if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2 &&
       rect1.x - rect2.x < rect1.width/2 + rect2.width/2  )
  {
    console.log("They are touching each other");
    rect2.shapeColor = "blue";
  rect1.shapeColor = "blue";
  }
  else
  {
     console.log("NOT TOUCHING");
     rect2.shapeColor = "black";
  rect1.shapeColor = "black";
  }
  

  drawSprites();
}