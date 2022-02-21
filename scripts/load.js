
  function loadImgs(){
  
    img_jef = loadImage('img/jef.jpeg');
    img_tig = loadImage('img/tig.jpeg');
    baixo = loadImage('img/baixo.png');
    cima = loadImage('img/cima.png');
    enter = loadImage('img/enter.png');
    esc = loadImage('img/esc.png');
    person = loadImage('img/person.png');
    asset = loadImage('img/tileset.png');

  }


function loadCamadas(){
  children = xml.getChildren('data');
  let str1 = children[0].getContent();
  let str2 = children[1].getContent();

  let array1 = str1.split(",");
  let array2 = str2.split(",");

  for(let i=0;i<9999;i++){
    c1[i]=parseInt(array1[i])
    c2[i]=parseInt(array2[i])
  }
}