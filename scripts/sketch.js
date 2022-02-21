/*
JEFFERSON HENRIQUE DE SOUZA PAIXAO 
Curso: CIÊNCIAS E TECNOLOGIA/ECT
Matrícula: 20210013215
Usuário: jefferson.henrique.103
E-mail: jefferson.henrique.103@ufrn.edu.br
Turma: 05C

LINK do video youtube    > https://youtu.be/m2Pltvwa18c
LINK do video Vimeo      > https://vimeo.com/674288785

*/

  let flagPreload = false;
  let xml;        //xml do mapa
  let children;   //dados do xml

function preload() {
  xml = loadXML('xmls/main.xml');
}

function setup() {
 variaveisGlobais();
 loadImgs();
 loadCamadas();
 createCanvas(canvasx, canvasy);
 textFont("Arial");
 flagPreload = true;
}

function draw() {
 if(flagPreload)drawMenu();
}











