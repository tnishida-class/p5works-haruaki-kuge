// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(222,0,222);
  rect(p, p, w + p * 2+p, h + p * 2+p);
  triangle(-p*2+w/2,p*3+h,p+w/2,p*6+h,p*4+w/2,p*3+h);
  fill(0,222,0);
  rect(0, 0, w + p * 2, h + p * 2);
  triangle(-p*3+w/2,p*2+h,w/2,p*5+h,p*3+w/2,p*2+h);
  fill(255);
  text(t, p, h-p );
}
