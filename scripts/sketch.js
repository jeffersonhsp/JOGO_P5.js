/*
JEFFERSON HENRIQUE DE SOUZA PAIXAO 
Curso: CIÊNCIAS E TECNOLOGIA/ECT
Matrícula: 20210013215
Usuário: jefferson.henrique.103
E-mail: jefferson.henrique.103@ufrn.edu.br
Turma: 05C
Professora: Idamis / 2021.2

links >>     
Explicação:      https://youtu.be/nTGokA-yIkw
video trailher:  https://www.youtube.com/watch?v=MkWxN2CgBK8&t=45s
edit p5.js:      https://editor.p5js.org/jeffersonhsp/sketches/4CljkqEie

*/
  let flagPreload = false, flagRungame=false;
  let xml;        // xml do mapa
  let children;   // dados do xml
  let songMenu, songPlay;

function preload() {
  xml = loadXML('xmls/main.xml');
  songMenu = loadSound('sound/menu.mp3');
  songPlay = loadSound('sound/game.mp3');
}

function setup() {
 variaveisGlobais();
 loadImgs();
 loadCamadas();
 createCanvas(canvasx, canvasy);
 textFont("Arial");
 flagPreload = true;
  
 background(0); 
 fill(18,32,45); 
 strokeWeight(4);  
 stroke(255, 204, 0);
 textAlign(CENTER,CENTER);
 textSize(60);
 fill(0,0,255);
 text("Iniciar Jogo", canvasx/2, canvasy/2);
    

}

function draw() {
 if(mouseIsPressed === true){
   if(mouseX>0 && mouseX < canvasx && mouseY > 0 && mouseY < canvasy){
     flagRungame = true; 
     songMenu.play();
   }
 }
 if(flagPreload && flagRungame)drawMenu();
}











