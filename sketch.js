function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(mouseX/3,mouseY-50/3,(mouseX*mouseY-50)/255);
    text("mouse X: "+mouseX,15,300);
    text("mouse Y: "+mouseY,15,50);
}
