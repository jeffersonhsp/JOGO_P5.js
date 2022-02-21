

function play(){

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
        if(bloco>0 && bloco<800)image(asset,(i-px)*34-(grid*34-canvasx)/2,(j-py)*34-(grid*34-canvasy)/2,34,34,xo,yo,[34],[34]);
        
        if(bloco>=800){
           bloco -= 800;
           xo = parseInt((bloco % 12)) * 72;
           yo = parseInt((bloco / 12)) * 96;
           image(person, (i-px)*34-(grid*34-canvasx)/2,(j-py)*34-(grid*34-canvasy)/2-10, 45, 60, xo, yo, [72], [96]);
        }
        
      }
    }
    
   
    
    printPerson();
    positionxat = positionx;
    positionyat = positiony;
    loadMapaOk = false;
  }
  
  
  
   if(nivel == 1)nivel1();
   if(nivel == 2)nivel2();
   if(nivel == 3)nivel3();
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
   millisec2=millis();
  
   if(orientation == "left"){
   if(bloco > 23 || bloco < 21)bloco = 22;
     if(moveFlag){
        if(atualmillisec2+200 < millisec2){
          atualmillisec2=millisec2;
          switch (bloco) {
            case 22:
              bloco=23;
              break;
            case 21:
              bloco=23;
              break;
            case 23:
              bloco=21;
              break;
            default:
          }
        }
     }else bloco = 22;
     xo = parseInt((bloco % 12)) * 72;
     yo = parseInt((bloco / 12)) * 96;
     image(person, 0, 0 , 45, 60, xo, yo, [72], [96]);
   }
  
   if(orientation == "right"){
   if(bloco > 35 || bloco < 33)bloco = 34;
     if(moveFlag){
        if(atualmillisec2+200 < millisec2){
          atualmillisec2=millisec2;
          switch (bloco) {
            case 34:
              bloco=35;
              break;
            case 33:
              bloco=35;
              break;
            case 35:
              bloco=33;
              break;
            default:
          }
        }
     }else bloco = 34;
     xo = parseInt((bloco % 12)) * 72;
     yo = parseInt((bloco / 12)) * 96;
     image(person, 0, 0 , 45, 60, xo, yo, [72], [96]);
   }

   if(orientation == "up"){
   if(bloco > 47 || bloco < 45)bloco = 46;
     if(moveFlag){
        if(atualmillisec2+200 < millisec2){
          atualmillisec2=millisec2;
          switch (bloco) {
            case 46:
              bloco=47;
              break;
            case 47:
              bloco=45;
              break;
            case 45:
              bloco=47;
              break;
            default:
          }
        }
     }else bloco = 46;
     xo = parseInt((bloco % 12)) * 72;
     yo = parseInt((bloco / 12)) * 96;
     image(person, 0, 0 , 45, 60, xo, yo, [72], [96]);
   }
  
   if(orientation == "down"){
   if(bloco > 11 || bloco < 9)bloco = 10;
     if(moveFlag){
        if(atualmillisec2+200 < millisec2){
          atualmillisec2=millisec2;
          switch (bloco) {
            case 10:
              bloco=11;
              break;
            case 11:
              bloco=9;
              break;
            case 9:
              bloco=11;
              break;
            default:
          }
        }
     }else bloco = 10;
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
    text('as rosas estão no bosque seguindo na estrada de terra' , 20, 50);
    text('se estiver com duvidas eu te explico melhor' , 20, 70);
    text('Ou tecle enter para avancar                                                 ↵' , 20, 100);
  }
  if(mensagem ==4){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('A soma e a adção tem o mesmo significado ' , 20, 30);
    text('a operaçao de adiçao é bem simples ' , 20, 50);
    text('' , 20, 70);
    text('Ou tecle enter para avancar                                                 ↵' , 20, 100);
  }
  if(mensagem ==5){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Se voçê tem 2 maçãs e seu amigo tem 3 maçãs' , 20, 30);
    text('a soma de maçãs de voçês dois é 5 maçãs' , 20, 50);
    text('porque 3+2=5  como tambem  2+2=4         ' , 20, 70);
    text('Ou tecle enter para avancar                                                 ↵' , 20, 100);
  }
  if(mensagem ==6){
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
  millisec=millis();
  
  if(c2[5544] == 0 && mensagem <8)c2[5544]=225;  //pedra
  if(c2[5444] == 0 && mensagem <8)c2[5444]=814;  //pessoa
    
    if(atualmillisec+900 < millisec){ 
      atualmillisec=millisec;
      switch (c2[5444]) {
        case 814:
          c2[5444]=826;
          break;
        case 826:
          c2[5444]=814;
          break;
        default:
      }
    }
  
  textAlign(LEFT);
  translate(-250, 200);
  stroke(0)
  fill(255)
  
  
  if(mensagem ==1){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Entao vamos lá' , 20, 30);
    text('o professor Darlan está tentando voltar para casa ' , 20, 50);
    text('e teve um pequeno incidente no caminho' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  if(mensagem ==2){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Va até la seguindo pela estrada de terra ' , 20, 30);
    text('é uma casa azul, a ultima casa  da estrada' , 20, 50);
    text('' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  
  if(mensagem ==3){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('O professor vai presisar ligar para os bombeiros' , 20, 30);
    text('e nao se recorda do ultimo algarismo  ' , 20, 50);
    text('do numero do telefone' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  
  if(mensagem ==4){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('mas ele sabe que é a diferença entre o numero ' , 20, 30);
    text('de rosas amarelas e rosas azuis' , 20, 50);
    text('' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  
  if(mensagem == 5){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Vá até o bosque novamente e faça este calculo' , 20, 30);
    text('Darlan é professor de calculo se estiver ' , 20, 50);
    text('duvida é so perguntar  que ele te ensina.' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  
  if(mensagem == 6){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('-Darlan, meu jovem é bem simples, Entendemos que ' , 20, 30);
    text('a subtração é a operação inversa da adição. Por exemplo, ' , 20, 50);
    text('quando dizemos que o resultado de 7 – 3 = 4, queremos ' , 20, 70);
    text('dizer que a diferença entre 7 e 3 é 4 e que 3+4=7.     ↵' , 20, 100);
  }
  
  if(mensagem == 7){
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Ele precisa da diferença entre as rosas amarelas ' , 20, 30);
    text('e as rosas azuis' , 20, 50);
    text('Informe a diferença usando o teclado...   ' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  if(mensagem == 8){
    c2[5444]=0;
    c2[5544]=0;
    rect(0, 0, 500, 120, 20);
    strokeWeight(0.5)
    textSize(18);
    fill(0)
    text('Uaaau!, você é bem inteligente  ' , 20, 30);
    text('o professor ja resolveu tudo e voltou para casa' , 20, 50);
    text('vamos nos aventurar mais?  ' , 20, 70);
    text('Tecle enter para avancar                                                 ↵' , 20, 100);
  }
  
}




function nivel3(){
  millisec=millis();
  textAlign(LEFT);
  translate(-250, 200);
  stroke(0);
  fill(255);


}













