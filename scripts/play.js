

function play(){

  nivel = 2;
  scale(1);
  let positionxat, positionyat;
  let atualImg;
  let bloco
  let xo ;
  let yo ;
  
  moveFlag = false;
  verificaOrientacao();
  movimenta();
  

  if(!loadMapaOk && positionxat != positionx && positionyat != positiony){
    background(0);
    let grid = 24;
    let px = parseInt(positionx/34) - (grid/2);
    let py = parseInt(positiony/34) - (grid/2);
    translate(-positionx%34, -positiony%34);
    
    for(let j=py ; j<(py+grid); j++){
      for(let i=px ; i<(px+grid) ; i++){
        atualImg = (j*100)+i; 
        bloco = c1[atualImg]-1;
        xo = parseInt((bloco % 24)) * 34;
        yo = parseInt((bloco / 24)) * 34;
        if(bloco>0)image(asset, (i-px)*34 - (grid*34-canvasx)/2 , (j-py)*34 - (grid*34-canvasy)/2, 34, 34, xo, yo, [34], [34]);
      }
    }
    
   for(let j=py ; j<(py+grid); j++){
      for(let i=px ; i<(px+grid) ; i++){
        atualImg = (j*100)+i; 
        bloco = c2[atualImg]-1;
        xo = parseInt((bloco % 24)) * 34;
        yo = parseInt((bloco / 24)) * 34;
        if(bloco>0)image(asset, (i-px)*34 - (grid*34-canvasx)/2 , (j-py)*34 - (grid*34-canvasy)/2, 34, 34, xo, yo, [34], [34]);
      }
    }
    
   
    
    printPerson();
    positionxat = positionx;
    positionyat = positiony;
    loadMapaOk = false;
  }
  
  
  
   if(nivel == 1)nivel1();
   if(nivel == 2)nivel2();
}











function verificaOrientacao(){
    if (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) ||
      keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
      
    if(keyIsDown(UP_ARROW) && orient1=="none"&& orient2=="none")orient2="up";
    else if(keyIsDown(UP_ARROW) && orient1=="none" && orient2!="up")orient1="up";
    if(keyIsDown(DOWN_ARROW) && orient1=="none"&& orient2=="none")orient2="down";
    else if(keyIsDown(DOWN_ARROW) && orient1=="none" && orient2!="down")orient1="down";
    if(keyIsDown(LEFT_ARROW) && orient1=="none"&& orient2=="none")orient2="left";
    else if(keyIsDown(LEFT_ARROW) && orient1=="none" && orient2!="left")orient1="left";
    if(keyIsDown(RIGHT_ARROW) && orient1=="none"&& orient2=="none")orient2="right";
    else if(keyIsDown(RIGHT_ARROW) && orient1=="none" && orient2!="right")orient1="right";
    if(orient1!="none" || orient2!="none"){
      if(orient1=="none" )orientation = orient2;
      else orientation = orient1;
    }
      
    if(!keyIsDown(RIGHT_ARROW) && orient1=="right"){orient1="none"; }
    else if(!keyIsDown(RIGHT_ARROW) && orient2=="right"){orient2 = orient1; orient1="none"; }
    if(!keyIsDown(LEFT_ARROW) && orient1=="left"){orient1="none"; }
    else if(!keyIsDown(LEFT_ARROW) && orient2=="left"){orient2 = orient1; orient1="none"; }
    if(!keyIsDown(UP_ARROW) && orient1=="up"){orient1="none"; }
    else if(!keyIsDown(UP_ARROW) && orient2=="up"){orient2 = orient1; orient1="none"; }
    if(!keyIsDown(DOWN_ARROW) && orient1=="down"){orient1="none"; }
    else if(!keyIsDown(DOWN_ARROW) && orient2=="down"){orient2 = orient1; orient1="none"; }
  }else{ orient1="none"; orient2="none"; }
  
}










function movimenta(){
 
  let livreUp=true, livreDown=true, livreRight=true, livreLeft=true;
  let xc;
  let yc;
  let xp;
  let yp;
  
  for(let i=0 ;i<9999 ; i++){ 
    if(c2[i] > 0){
      
      xc = (i%100) * 34;
      yc = Math.floor(i/100) * 34;
      xp = positionx;
      yp = positiony;
      
      if( (yp+34+2) >= yc && (yp+2) <= (yc+34) &&  (xp+34) >= xc && xp <= (xc+34) )livreDown = false;
      if( (yp+34-2) >= yc && (yp-2) <= (yc+34) &&  (xp+34) >= xc && xp <= (xc+34) )livreUp = false;
      if( (yp+34) >= yc && yp <= (yc+34) &&  (xp+34+2) >= xc && (xp+2) <= (xc+34) )livreRight = false;
      if( (yp+34) >= yc && yp <= (yc+34) &&  (xp+34-2) >= xc && (xp-2) <= (xc+34) )livreLeft = false;

    }
  }
  
   if (livreUp && orientation == "up" && !moveFlag && keyIsDown(UP_ARROW)) {positiony -=2; moveFlag = true;}
   if (livreDown && orientation == "down" && !moveFlag && keyIsDown(DOWN_ARROW)) {positiony +=2; moveFlag = true;}
   if (livreRight && orientation == "right" && !moveFlag && keyIsDown(RIGHT_ARROW)) {positionx +=2; moveFlag = true;}
   if (livreLeft && orientation == "left" && !moveFlag && keyIsDown(LEFT_ARROW)) {positionx -=2; moveFlag = true;}
}












function printPerson(){
   imageMode(CENTER);
   translate(positionx%34 + (canvasx/2) , positiony%34 + (canvasy/2) -8 );
  
   if(orientation == "left"){
     bloco = 22;
     xo = parseInt((bloco % 12)) * 72;
     yo = parseInt((bloco / 12)) * 96;
    image(person, 0, 0 , 45, 60, xo, yo, [72], [96]);
   }
   if(orientation == "right"){
     bloco = 34;
     xo = parseInt((bloco % 12)) * 72;
     yo = parseInt((bloco / 12)) * 96;
    image(person, 0, 0 , 45, 60, xo, yo, [72], [96]);
   }
   if(orientation == "up"){
     bloco = 46;
     xo = parseInt((bloco % 12)) * 72;
     yo = parseInt((bloco / 12)) * 96;
    image(person, 0, 0 , 45, 60, xo, yo, [72], [96]);
   }
   if(orientation == "down"){
     bloco = 10;
     xo = parseInt((bloco % 12)) * 72;
     yo = parseInt((bloco / 12)) * 96;
    image(person, 0, 0 , 45, 60, xo, yo, [72], [96]);
   }
  
}







function nivel1(){
  textAlign(LEFT);
  translate(-250, 200);
  stroke(0)
  fill(255)

  if(mensagem ==1){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Ola! bem vindo! você está prestes a iniciar uma aventura' , 20, 30);
    text('de conhecimento e diversao' , 20, 50);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  if(mensagem ==2){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Para ver se voçê realmente é um garoto inteligente ' , 20, 30);
    text('caminhe usando as setas do teclado até o bosque ao lado ' , 20, 50);
    text('direito e veja quantas rosas tem no jardim do bosque' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  if(mensagem ==3){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Digite o numero de rosas usando o teclado!' , 20, 30);
    text('' , 20, 50);
    text('' , 20, 70);
    text('' , 20, 100);
  }
  if(mensagem ==4){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Muito bem, estou vendo que vc ja tem habilidades com' , 20, 30);
    text('soma e muita vontade de se aventurar' , 20, 50);
    text('vamos nos divertir muito! ' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
}


function nivel2(){
  textAlign(LEFT);
  translate(-250, 200);
  stroke(0)
  fill(255)
  
    if(mensagem ==1){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('' , 20, 30);
    text('' , 20, 50);
    text('' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  
}





















