var player;
var canvas;
var enemyGroup;
var bg;
var backg;
var plI, enemyI;
var enemy;

function preload(){
  bg = loadImage("images/backgroundimg.jpg");
  plI = loadImage("images/player.png");
  enemyI = loadImage("images/enemy.jpg");
}

function setup() {
  canvas = createCanvas(1000,600);

  backg = createSprite(500, 100, 1000, 1000);
  backg.addImage("background", bg);
  backg.scale = 5;
  backg.velocityX = -5;

  player = createSprite(400, 430, 50, 50);
  player.addImage("player", plI);
  player.scale = 0.5;

  enemyGroup = createGroup();

  enemy = createSprite(900, 430, 50, 50);
  enemy.addImage("enemy", enemyI);
  enemy.scale = 0.3;
}

function draw() {
  if(backg.x <0){
    backg.x = 500;
  }
  drawSprites();
}