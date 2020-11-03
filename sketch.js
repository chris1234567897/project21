var bullet , wall;
var speed , weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,5,50);
  thickness=random(22,83);
  speed=random(223,321);
  weight=(30, 52);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80);
}
function hasCollided(b,w) {
  bulletrightedge=b.x+b.width;
  wallrightedge=w.x;
  if (bulletrightedge>=wallrightedge){
    return true;
  }
  return false
}
function draw() {
  background("black");  
  drawSprites();
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation>10){
      wall.shapeColor="red";
    }
    if(deformation<10){
      wall.shapeColor="green";
    }
    
  }
}