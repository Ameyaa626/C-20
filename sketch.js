var a,b;


function setup() {
  createCanvas(800,400);
 a = createSprite(600, 200, 50, 50);
 b = createSprite(200, 200, 50, 50);
}

function draw() {
  background(0);  

  a.x=mouseX;
  a.y=mouseY;

  if(a.x-b.x<a.width/2 + b.width/2 && b.x-a.x<a.width/2 + b.width/2 && 
   a.y-b.y<a.height/2 + b.height/2 && b.y-a.y<a.height/2 + b.height/2){
		a.shapeColor = "green";
		b.shapeColor = "green";
  } else{
        a.shapeColor = "red";
		b.shapeColor = "red";
  }

  drawSprites();
}