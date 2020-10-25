// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  let red = color(255, 0, 0);
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0){
      fill(j % 2 == 1 ? 160 : 255)}
      else if (j % 2 == 0) {
      fill(i % 2 == 1 ? 160 : 255)}
      else{
      fill(255)
      };
    console.log(i, j);
    rect(i*10,j*10,10,10) ;
      if(j<3){
        if(i % 2 == 0){
        fill(j % 2 == 1 ? red : 255)}
        else if (j % 2 == 0) {
        fill(i % 2 == 1 ? red : 255)}
        else{
        fill(255)}
      }
      else if(j>4){
        if(i % 2 == 0){
        fill(j % 2 == 1 ? 0 : 255)}
        else if (j % 2 == 0) {
        fill(i % 2 == 1 ? 0 : 255)}
        else{
        fill(255)}
      }
    ellipse(5+i*10,5+j*10,9,9);// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
   }
  }
}
