const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
var maxDrops=100
var drops=[]
var umbrella1,lightning1,lightning2,lightning3,lightning4
function preload(){
   // lightning1=loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png")
   lightning1=loadImage("images/1.png")
   lightning2=loadImage("images/2.png")
   lightning3=loadImage("images/3.png")
   lightning4=loadImage("images/4.png")
}

function setup(){
   createCanvas(400,400)
   engine = Engine.create();
   world = engine.world;
   for(var i=0;i<maxDrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)))
}
   umbrella1=new Umbrella(200,250)
   
   
   Engine.run(engine);
}

function draw(){
    background("black")
    drawSprites()
    Lightning()
    for (var k = 0; k < drops.length; k++) {
     
        drops[k].display();
        drops[k].rain()
      }
      umbrella1.display()
      
      
}   
/*function rain(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}*/
function Lightning(){
    if(frameCount%100===0){
    var lightning=createSprite(200,50,20,20)
    var r = Math.round(random(1,4));
      switch(r){
        case 1:lightning.addImage(lightning1);
          break;
          case 2:lightning.addImage(lightning2);
          break;
          case 3:lightning.addImage(lightning3);
          break;
          case 4:lightning.addImage(lightning4);
          break;
          default:break;
      }
      lightning.scale=0.35
      lightning.lifetime=20
    }
}