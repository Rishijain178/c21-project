function prelod(){
  bg=loadImg("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym21.png,images/gym22.png");
  eat=loadAnimation("add image urls here");
  drink=loadAnimation("add image urls here");
  move=loadAnimation("add image urls here");
  
  }

  astronut=cerateSprite(300,230);
  astronut.addAnimation("sleeping",sleep);
  astronut.scale=0.1;

  astronut=cerateSprite(300,230);
  astronut.addAnimation("brushing",brush);
  astronut.scale=0.1;

  astronut=cerateSprite(300,230);
  astronut.addAnimation("gyming",gym);
  astronut.scale=0.1;

  astronut=cerateSprite(300,230);
  astronut.addAnimation("eating",eat);
  astronut.scale=0.1;
  
  astronut=cerateSprite(300,230);
  astronut.addAnimation("drinking",drink);
  astronut.scale=0.1;

  astronut=cerateSprite(300,230);
  astronut.addAnimation("bathing",bath);
  astronut.scale=0.1;

  astronut=cerateSprite(300,230);
  astronut.addAnimation("moving",move);
  astronut.scale=0.1;

  //enterin animation
  if (keyDown(UP_ARROW)) {
    astronut.addAnimation("brushing",brush);
    astronut.changeAnimation("brushing");
    astronut.y=360;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }

  if (keyDown(DOWN_ARROW)) {
    astronut.addAnimation("gymming",gym);
    astronut.changeAnimation("gymming");
    astronut.y=360;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }

  if (keyDown(LEFT_ARROW)) {
    astronut.addAnimation("batting",bath);
    astronut.changeAnimation("batting");
    astronut.y=360;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }

  if (keyDown(RIGHT_ARROW)) {
    astronut.addAnimation("eating",eat);
    astronut.changeAnimation("eating");
    astronut.y=360;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }

  if (keyDown(m)) {
    astronut.addAnimation("moveing",move);
    astronut.changeAnimation("moveing");
    astronut.y=360;
    astronut.velocityX=2;
    astronut.velocityY=2;
  }

  


  
  


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}



