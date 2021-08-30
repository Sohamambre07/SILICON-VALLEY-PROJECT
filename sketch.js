var man
var bullet

function preload()
{
manImg = loadImage("man.png")
bulletImg = loadImage("bullet.png")
Zombie1Img = loadImage("Z1.png")
Zombie2Img = loadImage("Z2.png")
Zombie3Img = loadImage("Z3.png")
Zombie4Img = loadImage("Z4.png")
Zombie5Img = loadImage("Z5.png")
Zombie6Img = loadImage("Z6.png")
bg = loadImage("Jscenary.png")
}

function setup() {
	createCanvas(1920,862);
  man = createSprite(185,564,20,20)
  man.addImage(manImg)
  man.scale=1.5

zombieGroup = new Group()

  bullet = createSprite(228,541,20,20)
  bullet.addImage(bulletImg)
  bullet.scale=0.5
  bullet.velocityX=10;

  Zombie1 = createSprite(1061,627,20,20)
  Zombie1.addImage(Zombie1Img)
  Zombie1.scale=0.2
  Zombie2 = createSprite(1319,610,20,20)
  Zombie2.addImage(Zombie2Img)
  Zombie2.scale=0.2
  Zombie3 = createSprite(1527,595,20,20)
  Zombie3.addImage(Zombie3Img)
  Zombie3.scale=0.2
  Zombie4 = createSprite(1759,597,20,20)
  Zombie4.addImage(Zombie4Img)
  Zombie4.scale=0.4
  Zombie5 = createSprite(815,625,20,20)
  Zombie5.addImage(Zombie5Img)
  Zombie5.scale=0.7
  Zombie6 = createSprite(660,575,20,20)
  Zombie6.addImage(Zombie6Img)
  Zombie6.scale=0.3
}


function draw() {

  background(bg);

  textSize(40)
  text(mouseX+":"+mouseY,200,200)

  if(keyDown("right")){
    man.x+=9
    }
  
    if(keyDown("left")){
      man.x-=9
    }

    if(keyDown("up")){
      man.y-=9
    }

    if(keyDown("down")){
      man.y+=9
    }

    if (keyWentDown("space")) {
      bullet = createSprite(man.x,man.y,20,20)
      bullet.addImage(bulletImg)
      bullet.scale=0.5
      bullet.velocityX=8;
    }

    if (bullet.isTouching(Zombie1)) {
      Zombie1.destroy();
    }
    
    if (bullet.isTouching(Zombie2)) {
      Zombie2.destroy();
    }

    if (bullet.isTouching(Zombie3)) {
      Zombie3.destroy();
    }

    if (bullet.isTouching(Zombie4)) {
      Zombie4.destroy();
    }

    if (bullet.isTouching(Zombie5)) {
      Zombie5.destroy();
    }

    if (bullet.isTouching(Zombie6)) {
      Zombie6.destroy();
    }
  drawSprites();
 
  

}
