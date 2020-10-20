// 小手調べ
function setup(){
  createCanvas(100,100);
  fill(0);
  for(let i = 5; i < 100; i=i+10){
if (i < 50) {
    stroke(0,0,255);}
else{
  stroke(255,0,0);
}
    noFill();
    ellipse(50,50,i);// BLANK[1]
  }
}
