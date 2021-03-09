const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,canvas;
var ground,stand;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var polygon,slingshot,polygonIMG;

function preload() {
    polygonIMG=loadImage("polygon.png")
}

function setup(){
    canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(500,600,1000,20)
    stand =new Ground(580,500,300,20)

    //level 4
   block1 =new Box(460,465,40,50)
   block2 =new Box(500,465,40,50)
   block3 =new Box(540,465,40,50)
   block4 =new Box(580,465,40,50)
   block5 =new Box(620,465,40,50)
   block6 =new Box(660,465,40,50)
   block7 =new Box(700,465,40,50)
   //level 3
   block8  =new Box1(500,415,40,50)
   block9  =new Box1(540,415,40,50)
   block10 =new Box1(580,415,40,50)
   block11 =new Box1(620,415,40,50)
   block12 =new Box1(660,415,40,50)
   //level 2
   block13 =new Box2(540,365,40,50)
   block14 =new Box2(580,365,40,50)
   block15 =new Box2(620,365,40,50)
   //level 1
   block16 =new Box(580,315,40,50)

   //polygon
   polygon=Bodies.circle(50,200,20)
   World.add(world,polygon)
   
  
   slingshot=new SlingShot(this.polygon,{x:100,y:300})

}   

function draw(){
      background(0);
      Engine.update(engine);
    imageMode(CENTER)
    image(polygonIMG,polygon.position.x,polygon.position.y,80,80)

    ground.display()
    stand.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
  

       
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

