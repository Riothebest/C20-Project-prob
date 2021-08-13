var astronaut, astronautImg;
var bath, brush,  drink , eat , gym1 ,gym2, sleep;
var room, roomImg;
var gameState = "start";

function preload()
{
    bath = loadAnimation("bath1.png","bath2.png");
    brush = loadImage("brush.png");
    drink = loadAnimation("drink1.png","drink2.png");
    eat = loadAnimation("eat1.png","eat2.png");
    gym1 = loadAnimation("gym1.png","gym2.png");
    gym2 = loadAnimation("gym11.png","gym12.png");
    roomImg = loadImage("iss.png");
    sleep = loadImage("sleep.png");
    astronautImg = loadAnimation("move.png", "move1.png");
}

function setup()
{
  createCanvas(800,400);
  room = createSprite(400,200);
  room.addImage(roomImg);
  room.scale = 0.2;

  astronaut = createSprite(400, 200,10,10);
  astronaut.addImage("dance",astronautImg);
  astronaut.scale = 3
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}