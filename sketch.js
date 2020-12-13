var bullet,wall;
var speed,weight;
var damage;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor="white";

 

 thickness =random(22,83)
  speed=random(223,321);
  weight = random(30,52);

}

function draw() {
  background("black"); 

  wall= createSprite(1200,200, thickness ,height/2);

  bullet.velocityX = speed;
 
 if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
   
    wall.shapeColor=color(255,0,0);

  }

 if(damage<10){

    wall.shapeColor=color(0,255,0);

 }  

 }
    
  drawSprites();
}


function hasCollided(){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;


  if (bulletRightEdge>=wallLeftEdge){
    
      return true;
      }

       return false;   

    }
















