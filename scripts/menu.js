// menu inicial = 5

   

function drawMenu()
{
  if(menu == 5)telaDoMenu();
  if(menu == 1 && !stop)play();
  if(menu == 2)creditos();
  if(menu == 3)instrucoes();
  if(menu == 4)background(255);
  
  console.log(nivel+"   "+mensagem);
}













































  function newButton(x,y){
    
    if(x == 0){
      strokeWeight(0);fill(80,70,58);
      rect( (canvasx/2) - (btn_x/2)  , canvasy - btn_y - 70 ,btn_x, btn_y,rect_r);
      fill(255);
      strokeWeight(0);
      textSize(30);
      textAlign(CENTER,CENTER);
      text(y,(canvasx/2) , canvasy - (btn_y/2) - 70); 
    }else if(x >=1 && x<= num_but){
      strokeWeight(0);fill(80,70,58);
      rect(rect_xo+btnes_x,  rect_yo + btnes_y*x + btn_y*(x-1)  ,btn_x, btn_y,rect_r);
      fill(255);
      strokeWeight(0);
      textSize(30);
      textAlign(CENTER,CENTER);
      text(y,rect_xo+btnes_x+(btn_x/2) , rect_yo + btnes_y*x + btn_y*(x-1) + (btn_y/2)); 
    }
  }






  function mousePressed() {
    if(menu == 5){
      for(let i=1;i<=num_but;i++){
        if(    mouseX > ( rect_xo+btnes_x                             ) 
            && mouseX < ( rect_xo+btnes_x+btn_x                       ) 
            && mouseY > ( rect_yo + btnes_y*i + btn_y*(i-1)           )
            && mouseY < ( rect_yo + btnes_y*i + btn_y*(i-1) + btn_y   )
         ){
              if(i == 1 )menu = 1;
              if(i == 2 )menu = 2;
              if(i == 3 )menu = 3;
              if(i == 4 )menu = 4;
          }
      }
    }
    
    
    if(menu == 2 || menu == 3) {
      
      if(    mouseX > ( (canvasx/2) - (btn_x/2)          ) 
          && mouseX < ( (canvasx/2) - (btn_x/2) + btn_x  ) 
          && mouseY > ( canvasy - btn_y - 70             )
          && mouseY < ( canvasy - btn_y - 70 + btn_y     )
       ){
          menu = 5;
        }
    }
    
  }//////End Mouse Pressed////
  


  function keyPressed() {
    
    if(menu == 5 || menu == 2|| menu ==3 || menu == 4){
      if (key == 'ArrowDown') seletor +=1;
      if (key == 'ArrowUp') seletor -=1;
      if(seletor < 1)seletor = num_but;
      if(seletor > num_but)seletor = 1;

      if (key == 'Enter') {
        for(let i=1;i<=num_but;i++){
          if(seletor == i)menu = i;
        }
      }
      if((menu == 2 || menu == 3 || menu == 1) && key == "Escape") menu = 5;
      console.log(key);
  
    }
    
    
    
    if(menu == 1 && nivel==1){
      switch (mensagem) {
        case 1:
          if(key == 'Enter')mensagem ++;
          break;
        case 2:
          if(key == 'Enter')mensagem ++;
          break;
        case 3:
          if(key == '6')mensagem ++;
          break;
        case 4:
          if(key == 'Enter'){nivel = 2; mensagem = 0;}
          break;
        default:
      }
    }
    
    
    if(menu == 1 && nivel==2){
      switch (mensagem) {
        case 1:
          if(key == 'Enter')mensagem ++;
          break;
        case 2:
          if(key == 'Enter')mensagem ++;
          break;
        case 3:
          if(key == 'Enter')mensagem ++;
          break;
        case 4:
          if(key == 'Enter')mensagem ++;
          break;
        case 5:
          if(key == 'Enter')mensagem ++;
          break;
        case 6:
          if(key == 'Enter')mensagem ++;
          break;
        case 7:
          if(key == 'Enter')mensagem = 5;
          if(key == '2')mensagem = 8;
          break;
        case 8:
          if(key == 'Enter'){nivel = 3; mensagem = 0;}
          break;
        default:
      }
    }
    
    if(mensagem == 0)mensagem ++;
  }
  

  function seletor_menu(){  
    fill(255, 204, 0);strokeWeight(3);textSize(35);
    text("<", rect_xo+(btnes_x/2) , rect_yo + btnes_y*seletor + btn_y*(seletor-1) + (btn_y/2) +2);
    text(">", rect_xo+(btnes_x/2)+btnes_x+btn_x , rect_yo + btnes_y*seletor + btn_y*(seletor-1) + (btn_y/2)+2);
    strokeWeight(5);noFill();
    rect(rect_xo+btnes_x , rect_yo + btnes_y*seletor + btn_y*(seletor-1), btn_x, btn_y,rect_r);
  }


  function instrucoes(){
    
    background(18,32,45);
    fill(18,32,45);strokeWeight(2);textSize(26);
    textAlign(CENTER);text('INSTRUÇÕES', canvasx/2, canvasy/8);
    newButton(0,"Voltar");

    let txt_inst = "Este é um jogo rpg, onde o jogador irá interpretar um personagem e avançar etapas do jogo descobrinto novas propriedades e curiosidades matematicas, passando por vareas fazes e se divertindo enquanto isso.";
    
    textSize(18);fill(255);
    textAlign(CENTER, TOP);
    text(txt_inst, canvasx/20, canvasy/4, canvasx-canvasx/10, canvasy-canvasy/2);
    
    
    strokeWeight(0.6);textSize(18);fill(255);
    textAlign(LEFT,CENTER);image(esc,canvasx-130, canvasy-62, 20,20);
    textAlign(LEFT,CENTER);text("Voltar", canvasx-100, canvasy-50);
    
  }


  function telaDoMenu(){
    btnes_x = (rect_x-btn_x)/2 , btnes_y = (rect_y-(num_but*btn_y))/(num_but+1); // recalcula espaço entre os botoes
    
    background(18,32,45);   //fundo inicial 
    
    strokeWeight(5);stroke(255, 204, 0);fill(18,32,45); //desenha retangulo do menu  
    rect(rect_xo, rect_yo, rect_x, rect_y,rect_r);      //
    
    strokeWeight(8);textSize(45);                              //escreve o titulo
    textAlign(CENTER);text('MATH EASY', canvasx/2, canvasy/8); //
    

    
    textAlign(LEFT,CENTER);image(cima,canvasx-130, canvasy-92, 20,20);
    textAlign(LEFT,CENTER);image(enter,canvasx-130, canvasy-62, 20,20);
    textAlign(LEFT,CENTER);image(baixo,canvasx-130, canvasy-32, 20,20);

    strokeWeight(0.6);textSize(18);fill(255);
    textAlign(LEFT,CENTER);text("Cima",  canvasx-100, canvasy-80);
    textAlign(LEFT,CENTER);text("Entrar", canvasx-100, canvasy-50);
    textAlign(LEFT,CENTER);text("Baixo", canvasx-100, canvasy-20);
    
    
    num_but = 4;
    newButton(1,"Jogar");                                      //insere os botoes no menu
    newButton(2,"Créditos");                                   //
    newButton(3,"Instruções");                                 // 
    newButton(4,"Sair");                                       //
    seletor_menu();
    
    
    
    for(let i=1;i<=num_but;i++){
      if(    mouseX > ( rect_xo+btnes_x                             ) 
          && mouseX < ( rect_xo+btnes_x+btn_x                       ) 
          && mouseY > ( rect_yo + btnes_y*i + btn_y*(i-1)           )
          && mouseY < ( rect_yo + btnes_y*i + btn_y*(i-1) + btn_y   )
          ){
            seletor = i;
           }
    }
  }


  function creditos(){
    background(18,32,45);
    fill(18,32,45);strokeWeight(2);textSize(26);
    textAlign(CENTER);text('CRÉDITOS', canvasx/2, canvasy/8);
    newButton(0,"Voltar");
    image(img_jef, 62, 150 , 68 ,100);
    image(img_tig, 60, 280 , 75 ,100);
    strokeWeight(1);textSize(15);
    textAlign(LEFT,LEFT);text("Jefferson Henrique", 160, 200);
    textAlign(LEFT,LEFT);text("Thiago Castro", 160 , 330);
    
    strokeWeight(0.6);textSize(18);fill(255);
    textAlign(LEFT,CENTER);image(esc,canvasx-130, canvasy-62, 20,20);
    textAlign(LEFT,CENTER);text("Voltar", canvasx-100, canvasy-50);
  }