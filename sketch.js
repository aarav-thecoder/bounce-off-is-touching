var fixedrect,movingrect;


function setup() {

  createCanvas(1200,800);
  fixedrect=  createSprite(400, 100, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.velocityY=5;
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="green";
  movingrect.velocityY=-5;
}

function draw() {
  background("yellow");  
  //movingrect.y=World.mouseY;
  //movingrect.x=World.mouseX;
/*
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 )
{
   fixedrect.shapeColor="red";
   movingrect.shapeColor="red";
 }
else{
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}
*/
if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
&& fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 ){

  movingrect.velocityY=movingrect.velocityY*(-1);
  fixedrect.velocityY=fixedrect.velocityY*(-1);
  }

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 ){
    
      movingrect.velocityX=movingrect.velocityX*(-1);
      fixedrect.velocityX=fixedrect.velocityX*(-1);
      }
    

  drawSprites();
}