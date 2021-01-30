var canvas,bg;
var together;
var tom, tomLast,tomAnimation,tomInitial;
var jerry, jerryInitial,jerryAnimation,jerryLast;

function preload() {
    bg = loadImage("images/garden.png");
    tomInitial= loadImage("images/tomOne.png");
    tomAnimation=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomLast= loadImage("images/tomFour.png");
    jerryInitial=loadImage("images/jerryOne.png");
    jerryAnimation= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryLast=loadImage("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addImage("tomInitialPosition", tomInitial);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addImage("jerryInitialPosition", jerryInitial);
    jerry.scale = 0.15;

}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomAnimation);
        tom.changeAnimation("tomRunning",tomAnimation);
        
        jerry.addAnimation("jerryTeasing", jerryAnimation);
        jerry.frameDelay = 25;
       jerry.changeAnimation("jerryTeasing",jerryAnimation);
    }
}

function draw() {

  background(bg);

  if(tom.x - jerry.x < (tom.width - jerry.width)/2)
  { 
      tom.velocityX=0;
      tom.addImage("tomLastImage", tomLast);
      tom.x =300;
      tom.scale=0.2;

      jerry.addImage("jerryLastImage", jerryLast);
      jerry.scale=0.15;
    // jerry.changeAnimation("jerryLastImage");
  }  

  drawSprites();
}


