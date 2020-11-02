var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 30, 30);
  wall = createSprite(600, 200, 50, height/2);

  speed = random(40,100);
  weight = random(400,1500);

  car.velocityX = speed;

  
}

function draw() {
  background(255,255,255);  
  var deformation = 0.5*weight*speed*speed/22509;
  textSize(20)
  text("Deformation " +  deformation, 400, 50)
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    
     
    if(deformation<80){
      car.shapeColor = color(0,255,0);
    }
    else if(deformation>=80 || deformation <180){
      car.shapeColor = color(0,0,255);
    }
    else// (deformation>=180)
    {
      car.shapeColor = color(255,0,0);
    }
    car.x = wall.x - ((wall.width/2 + car.width/2))
  }





  drawSprites();
  
}