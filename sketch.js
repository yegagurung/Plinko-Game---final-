const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;
var score=0
var count= 0
var gamestate="start"
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight = 300;


  
function setup() { 
  createCanvas(800,800);
  
  //back = createSprite(240, 798, 480, 30);
 // back.addImage(groundimg);
  //back.scale = 0.3;

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 75; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 75; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
  
  
}

 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gamestate =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gamestate ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gamestate ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gamestate ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mouseReleased()
{ console.log("clicking")
  if(gamestate!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}



/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;
var score=0
var count= 0
var gamestate="start"
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight = 300;

function preload(){
  groundimg = loadImage("iceback.jpg");
}
function setup() { 
  createCanvas(800,800);
  
  //back = createSprite(240, 798, 480, 30);
 // back.addImage(groundimg);
  //back.scale = 0.3;

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 75; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 75; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
  
  
}

function draw() {
  Engine.update(engine);
  background("black" );
  textSize(35)
  text("Score "+score,20,40)
  
  fill("white")
  textSize(35)
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("100",320,550)
  text("100",400,550)
  text("100",480,550)
  text("200",560,550)
  text("200",640,550)
  text("200",720,550)
  //if (frameCount % 60 === 0){
   // particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
 // }

  ground.display();
  if(gamestate=="end"){
    textSize(100)
    text("Gameover", 150, 200)
  }
  
  

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  if(particle!=null){
    particle.display()
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500
        particle=null
        if(count>=5){
          gamestate="end"
        }
      }
      else if (particle.body.positionx<600&&particle.body.position.x>301){
        score=score+100
        particle=null
        if(count>=5){
          gamestate="end"
        }}
        else if (particle.body.positionx<900&&particle.body.position.x>601){
          score=score+200
          particle=null
          if(count>=5){
            gamestate="end"
          }}
      }
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}
function  mousePressed(){
  if(gamestate!="end"){
    count++
    particle= new Particle(mouseX,10,10,10) 
  }
} 
*/
