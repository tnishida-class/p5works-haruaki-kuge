// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  balloon(y);
  let dow = dayOfWeek(y, m, 1);
  console.log(dayOfWeekAsString(dow));
  for(let d = 1; d <= daysInMonth(y, m); d++){
    fill(0);
    text(dayOfWeekAsString(d),d*10,40)
    text(d,d*10,60);
     //BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)?365:366;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
    if (dayOfYear(1995,1,1)-dayOfYear(y,m,d)%7==0){
      return "日"};
    if (dayOfYear(1995,1,1)-dayOfYear(y,m,d)%7==1) {
      return "月"};
    if (dayOfYear(1995,1,1)-dayOfYear(y,m,d)%7==2) {
      return "火"};
    if (dayOfYear(1995,1,1)-dayOfYear(y,m,d)%7==3) {
      return "水"};
    if (dayOfYear(1995,1,1)-dayOfYear(y,m,d)%7==4) {
      return "木"};
    if (dayOfYear(1995,1,1)-dayOfYear(y,m,d)%7==5) {
      return "金"};
    if (dayOfYear(1995,1,1)-dayOfYear(y,m,d)%7==6) {
      return "土"};
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}


function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(0,222,0);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(255);
  text(t, p, h-p );
}
