

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var backgroundImg;
var shuttleImg,asteroidImg;
var asterd=[]
var x,y;

var missileImg;

var engine,world,score=0;


function preload(){
  backgroundImg=loadImage("download.png");
  shuttleImg = loadImage("newshuttle.png")
  asteroidImg=loadImage("newasteroid.png");
  missileImg=loadImage("newmissile.png");
  blastImg=loadImage("blast.jpg");
}
 
function setup() {
   createCanvas(800,400);
   shuttle=createSprite(700,200,50,50);
   shuttle.addImage(shuttleImg);
   shuttle.scale=0.2;

 


   missile=createSprite(700,170,50,50);
   missile.addImage(missileImg);
   missile.scale=0.05;

   blast=createSprite(700,350,5,5);
  
   
    
   engine = Engine.create();
   world=engine.world;
   asteroids=new Group();
   
}


function draw()
 {
  background(backgroundImg);  
  Engine.update(engine);

  
  
   if (frameCount%100===0) {
    
    asterd.push(new Aster(random(300,450),100,50));
      } 
     
  for (var j=0;j<asterd.length;j++) {
   missile.visible=true;
    asterd[j].y+=2;
     
    asterd[j].display();
   
   // console.log(asterd[j].x)
      

     if (asterd[j].y>missile.y){
    
      asterd.splice(j,1);
      score=score+1;
      missile.visible=false;
    
      }

  }

  
  
  text("Score: "+score,200,100,100);

     if (keyIsDown(UP_ARROW) ) {
         missile.y -= 5;
       }
    if (keyIsDown(RIGHT_ARROW) ) {
       shuttle.x += 5;
       missile.x+=5
      }
    if (keyIsDown(LEFT_ARROW) ) {
      shuttle.x -= 5;
      missile.x -= 5;
      }
      

   drawSprites();

}


/*function addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
  for (var i = 0; i < numberOfSprites; i++) {
    var x, y;
    
    x = random( width / 2 - 150,700);
    y = random(-height * 4.5, height - 400);

    var sprite = createSprite(x, y);
    sprite.addImage("sprite", spriteImage);
    

    sprite.scale = scale;
   spriteGroup.add(sprite);

   //if(sprite.positionY>shuttle.y){
     //sprite.destroy();
     
   //}

  }
} */


