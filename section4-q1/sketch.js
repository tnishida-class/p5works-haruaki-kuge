// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  i=50
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count<50){i+=1};
  if (count>=50) {i-=1};
  fill(255,0,0);
  ellipse(width / 2, height / 2, i);
}

function keyPressed(){
  if(key == " "){
    count = count/2;
    cycle = cycle/2;
    i = i/2;
   }
}

function keyReleased() {
  if(key == " "){
    count = count*2
    cycle = cycle*2
    i = i*2;
  }
}
