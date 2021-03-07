var Wall,thickness,bullet,speed





function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  wall=createSprite(700, 200, thickness, 400);
  wall.shapeColor="grey"
  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed
  bullet.shapeColor="black"
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0
    var d=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(d>10){
      wall.shapeColor="red"
    }
    if(d<10){
      wall.shapeColor="green"
    }
  }
  drawSprites();
}