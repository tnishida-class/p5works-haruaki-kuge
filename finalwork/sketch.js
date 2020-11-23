// 最終課題を制作しよう
let x,y;
let w,d,h;
let c;
let s;
let i,j;
let t,a,b;
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, 1500);
  w=20;
  d=80;
  h=100;
  c=0;
  s=0;
  x=y=0;
  count=0;
  cycle=100;
}

function draw(){
  background(255);
  noStroke();
  //タイトル
  textSize(32);
  text("錯視の不思議",windowWidth/2-130,32);
  //見出し
  textSize(24);
  text("錯視って何だろう？",w*2,h);
  text("・ポッケンドルフ錯視",w,h+400);
  text("・きらめき格子錯視",windowWidth/2,h+400);
  text("・オプ効果",w,h+700);
  text("・仮想運動",windowWidth/2,h+700);
  //本文
  textSize(16);
  text("視覚領域における錯覚のこと。",w,h+50);
  text("知覚した世界と外界との間には大なり小なり食い違いが存在する。その食い違いを錯視という。(By広辞苑)",w,h+70);
  text("言葉で説明されてもわかりずらいですよね",w,h+90);
  text("まずはこちらの図を御覧ください",w,h+110);
  text("これはミュラー・リヤー錯視という錯視です",w,h+250);
  text("右の横棒のほうが長く見えませんか？",w,h+270);
  text("「確認」ボタンをクリックすると同じ長さだと分かります",w,h+290);
  text("※プログラムを検証すればより分かりやすいかもしれません",w,h+310);
  text("この他にも様々な錯視があります",w,h+350);
  text("斜線がずれているように見えませんか？",w,h+640);
  text("格子状の黒い点の中に白い点が見えませんか？",windowWidth/2,h+640);
  text("グルグル回転しているように見えませんか？",w,h+1000);
  text("実行ボタンをクリックしてください",windowWidth/2,h+980);
  text("黒い丸が左右に移動しているように見えませんか？",windowWidth/2,h+1000);

  push();
  stroke(255);
  fill(255);
  text("私には見えません",windowWidth/2,h+1200);
  pop();

  push();
  noFill();
  stroke(0);
  strokeWeight(3);
  //ミュラー・リヤー錯視
  line(d,h+150,d+100,h+150);
  line(d+200,h+150,d+300,h+150);

  stroke(c);

  line(d,h+150,d+20,h+160);
  line(d,h+150,d+20,h+140);
  line(d+100,h+150,d+80,h+160);
  line(d+100,h+150,d+80,h+140);

  line(d+200,h+150,d+180,h+160);
  line(d+200,h+150,d+180,h+140);
  line(d+300,h+150,d+320,h+160);
  line(d+300,h+150,d+320,h+140);

  pop();

  //ポッケンドルフ
  push();
  stroke(0);
  strokeWeight(3);
  line(d,h+580,d+130,h+440);
  pop();

  push();
  strokeWeight(3);
  stroke(0);
  fill(255);
  rect(d+30+s,h+440,d-20,h+50);
  pop();
  push();
  //仮想運動
  fill(0);
  count = (count + 1) % cycle;
  if (count<=50){
    ellipse(windowWidth/2+100,h+750,50);
  }
  if(count>50){
    ellipse(windowWidth/2+100+x,h+750,50);
  }
  pop();
  push();
  //オプ
  for(let z = 10; z < 140; z=z+10){
    stroke(0);
    noFill();
    ellipse(d+50,h+800,z)
  }
  pop();
  //きらめき格子
  push();
  fill(0);
  rect(windowWidth/2+50,520,180,180);
  strokeWeight(5);
  stroke(120);
  for(let j = 530; j < 700; j=j+20){
    line(windowWidth/2+55,j,windowWidth/2+225,j);
  }
  for(let i = windowWidth/2+60; i < windowWidth/2+225; i=i+20){
      line(i,520,i,700);
  }
  pop();
  push();
  fill(255);
  for(let j = 530; j < 700; j=j+20){
    for(let i = windowWidth/2+60; i < windowWidth/2+225; i=i+20){
      ellipse(i,j,5);
    }
  }
  pop();

  push();
  balloon("確認",200,300);
  balloon("確認",250,h+550);
  balloon("実行",windowWidth/2+100,h+820);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  if(mouseX>195&&mouseX<235&&mouseY>285&&mouseY<h+305){
    c=255;
  }
  if(mouseX>245&&mouseX<285&&mouseY>h+535&&mouseY<h+555){
    s=150;
  }
  if(mouseX>windowWidth/2+95&&mouseX<windowWidth/2+135&&mouseY>h+805&&mouseY<h+825){
    x=100;
    y=100;
  }
}

function balloon(t,a,b){
  noStroke();
  fill(160,192,255);
  rect(a-5,b-15,40,20);
  fill(255);
  text(t,a,b);
}
