
var gameState = 0;
var playerCount;
var database;
var player;
var game;

var harry;
var ron;
var hermoine;
var award,awardImg
var harryImg;
var ronImg;
var hermoineImg;

var snitch, snitchImg;
var spriteBg;

var snitchGrp;
var gameState = "play";



function preload()
{
  bg= loadImage("pics/grass.jpeg");
  harryImg = loadImage("pics/harry.png");
  ronImg = loadImage("pics/ron.png");
  hermoineImg = loadImage("pics/hermoine.png");
awardImg=loadImage("pics/award.png");
snitchImg=loadImage("pics/snitch.png")
}


function setup() {
  createCanvas(800, 800);
  spriteBg = createSprite(600,600,1200,1200);
  spriteBg.addImage(bg);
  spriteBg.scale = 2
  spriteBg.velocityY = 0.5  
  

  harry = createSprite(200,displayHeight-200);
  harry.addImage(harryImg)
  harry.scale=0.26
  ron = createSprite(400,displayHeight-200); 
  ron.addImage(ronImg)
  ron.scale=0.35
  hermoine = createSprite(600,displayHeight-200);
  hermoine.addImage(hermoineImg)
  hermoine.scale=0.2

award=createSprite(100,60,100,100)
award.addImage("award",awardImg);
award.scale=0.5

snitchGrp = new Group()

   
 
}

function draw() {
  

  if (spriteBg.y>320)
  {
    spriteBg.y = 300;
  }
  background("white");
  if (gameState === "play")
  {
    if (keyDown("UP_ARROW"))
    {
      harry.y = harry.y -3
    }
  
    if (keyDown("DOWN_ARROW"))
    {
      harry.y = harry.y +3
    }
  
    if (keyDown("LEFT_ARROW"))
    {
      harry.x = harry.x-3
    }
  
    if (keyDown("RIGHT_ARROW"))
    {
      harry.x = harry.x+3
    }
    if (keyDown("S"))
    {
     ron.x = ron.x +3
    }
  
    if (keyDown("A"))
    {
      ron.x = ron.x-3
    }
    if (keyDown("W"))
    {
      ron.y = ron.y-3
    }
  
    if (keyDown("Z"))
    {
      ron.y = ron.y+3
    }
  
    if (keyDown("K"))
    {
     hermoine.x = hermoine.x +3
    }
  
    if (keyDown("J"))
    {
     hermoine.x = hermoine.x -3
    }
  
  
    if (keyDown("I"))
    {
      hermoine.y = hermoine.y-3
    }
  
    if (keyDown("M"))
    {
      hermoine.y = hermoine.y+3
    }
  
    getSnitch();
  
  drawSprites()
  textSize(20);
    fill("black");
    text("Use Left and Right Arrow Keys to move Harry!!",200,70)
    text("Use A and S Keys to move Ron!!",250,100)
    text("Use J and K Keys to move Hermoine!!",230,130)
    if (snitchGrp.isTouching (harry))
  {
    harry.destroy()
    ron.destroy()
    hermoine.destroy()
    gameState = "endh"
    
  }
  if (snitchGrp.isTouching (ron))
  {
    harry.destroy()
    ron.destroy()
    hermoine.destroy()
    gameState = "endr"
   
  }

  if (snitchGrp.isTouching (hermoine))
  {
    harry.destroy()
    ron.destroy()
    hermoine.destroy()
    gameState = "endg"

  }
  }
  else if (gameState === "endh")
  {
    textSize(50);
    fill("black");
    text("Harry Wins the Game!! ",100,400)
    text("Congratulations ",200,600)
  }

  else if (gameState === "endr")
  {
    textSize(50);
    fill("black");
    text("Ron Wins the Game!! ",100,400)
    text("Congratulations ",200,600)
  }

  else if (gameState === "endg")
  {
    textSize(50);
    fill("black");
    text("Hermoine Wins the Game!! ",100,400)
    text("Congratulations ",200,600)
  }


}

function getSnitch(){
if(frameCount%500===0){
  var snitch=createSprite(400,100,100,100);
  snitch.addImage(snitchImg);
    snitch.scale=0.1;
    snitch.debug = true
  snitch.velocityX= Math.round(random(-3,3));
  snitch.velocityY=Math.round(random(-2,2))
  snitch.y = Math.round (random(100,350));
  snitch.x = Math.round (random(100,350));
  snitchGrp.add(snitch);
 }


}

