var uno
var dos
var tres
var cuatro
var avanza
var retrocede
var cuenta = 1
var pag='pag'

function preload() {
  uno = loadImage('11.jpg');
  dos = loadImage('12.jpg');
  tres = loadImage('13.jpg');
  cuatro = loadImage('14.jpg');

}

function setup() {
  createCanvas(800, 800);
  avanza = createButton('adelante')
  avanza.mousePressed(avan);
  avanza.position(width - 110, height - 75);
  avanza.size(80, 50);
  retrocede = createButton('atras')
  retrocede.mousePressed(retr);
  retrocede.position(30, height - 75);
  retrocede.size(80, 50);


}

function draw() {
  background(220);
  textSize(20);
  text(cuenta, width / 2, height - 50);
  text(pag, 160, height - 50);
  
  if (cuenta==1){image(uno,50,20)}
  if (cuenta==2){image(dos,66,20)}
  if (cuenta==3){image(tres,50,20)}
  if (cuenta==4){image(cuatro,50,20)}
  
}

function avan() {
  if (cuenta < 4) {
    cuenta++
  } else {
    cuenta = 1
  }
}

function retr() {
  if (cuenta > 1) {
    cuenta--
  } else {
    cuenta = 4
  }
}