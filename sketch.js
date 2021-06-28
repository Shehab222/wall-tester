var wall,thickness;
var bullet,speed,weight;





function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  bullet=createSprite(50,200,70,30);
  bullet.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background(255,255,255); 

  

  if(wall.x-bullet.x < (bullet.width + wall.width)/2) {
    bullet.velocityX=0;
    
    var damage = 0.5 * weight *speed*speed/wall.width*wall.width*wall.width;
    
    if(damage < 10){
      wall.shapeColor= "green"
    } else {
      wall.shapeColor= "red"
    }
  
  }
  drawSprites();
}
function hasCollided (bullet,wall)
{
bulletRightEdge.bullet.x+bullet.width


}