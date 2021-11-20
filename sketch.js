var width_ret=30, height_ret=60;     //largura e altura do retangulo
var canvasx=400, canvasy=400;        //largura e altura da area do projeto

var x=(canvasx/2-width_ret/2), y=(canvasy/2-height_ret/2); //cengraliza o retangulo
var offsetX=0, offsetY=0;            //guarda a diferença da borda do quadrado, a onde foi clicado
var locked = true, pressed = false;  //variaveis auxiliares

function setup() {                   //setup inicial
  createCanvas(canvasx, canvasy);    //cria a area total do projeto
  background(237, 34, 93);           //coloca uma cor na area total do projeto
  fill(0);                           //coloca a cor do objeto a ser desenhado "preto" 
  rect(x, y, width, height);         //desenha o objeto "retangulo"

}

function draw(){                            //loop 
    background(237, 34, 93);                //re-coloca uma cor na area total do projeto
    rect(x, y, width_ret, height_ret);      //re-desenha o objeto "retangulo"

    if(mouseIsPressed){                     //verifica se o mouse for pressionado
        if(!pressed){                       //seta flag
            if (                            
                mouseX >= x &&              //
                mouseX <= x+width_ret &&    //  verifica se o mouse esta 
                mouseY >= y &&              //    dentro do retangulo
                mouseY <= y + height_ret    // 
                ){                          
                if(!locked){                //verifica flag do offset
                    offsetX = (mouseX - x); //guarda a diferenca do mouse a borda do retangulo
                    offsetY = (mouseY - y); //guarda a diferenca do mouse a borda do retangulo
                    locked = true;          //mantem a diferença fixa enquajnto pressionado o mouse
                }   
            }
            pressed = true;                 //seta flag, apenas a borda de subida do botao 
        }
        if(locked){                         //checa se o mouse mantem o click no retangulo
            x = mouseX - offsetX;           //atualiza os valores de x considerando o OFFSET
            y = mouseY - offsetY;           //atualiza os valores de y considerando o OFFSET
        }
    }else{                                  //se o mouse for solto
        locked = false;                     //desprende o mouse do retangulo
        pressed = false;                    //zera a flag do click
    }
}
