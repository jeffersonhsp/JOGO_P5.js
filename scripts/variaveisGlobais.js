function variaveisGlobais(){
  
  
  window.canvasx=700;          //dimensoes do canvas
  window.canvasy=700;          //dimensoes do canvas
  window.positionx = 1900;     //posiçao atual no mapa
  window.positiony = 1400 ;     //posiçao atual no mapa
  window.nivel = 1 ;           //nivel atual no jogo
  window.mensagem = 1;
  //positionx-=200;
  //positiony+=400;
  
  
  window.rect_x = 320;
  window.rect_y = 350;
  window.rect_r = 25;                         //dimensoes do retangulo  no menu
  window.rect_xo = (canvasx-rect_x)/2;
  window.rect_yo = (canvasy-rect_y)/2+20;  //calcula o centro do retangulo                               
  window.num_but = 0;                                                        //quantidade de botoes no menu
  window.btn_x = 220;
  window.btn_y = 50;                                         //dimensoes do botao do menu
  window.btnes_x = 0;
  window.btnes_y = 0;                                      //espaço entre os botoes

  window.menu = 5;
  window.seletor = 1;  
  


  window.c1 = [];              //vetor da camada1
  window.c2 = [];              //vetor da camada2
  window.loadMapaOk = false;   //flag do carregamento do mapa
  window.moveFlag = false;     //flag da movimentaçao do player

  window.orientation = "down"; //orientaçao do sentido do player
  window.orient1="none";       //auxilia a orientaçao 
  window.orient2="none";       //auxilia a orientaçao

  window.stop = false;         //variavel de parada para testes
  
  window.millisec=0;
  window.atualmillisec=0;
  
  window.img_jef=undefined;
  window.img_tig=undefined;
  window.baixo=undefined;
  window.cima=undefined;
  window.enter=undefined;
  window.esc=undefined;
  window.asset=undefined;
  window.person=undefined;
  
}