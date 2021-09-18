var bbhImg,gnfImg,dreamImg,sapnapImg,karlJImg,skeppyImg
var ranbooImg,tommyImg,tubboImg,wilburSImg,quackityImg,technobladeImg
var obstacle,obstacle1Img,obstacle2Img,obstacle3Img,obstacle4Img
var gameOver,gameOverImg
var playersG,obstaclesG,player

function preload(){
 bbhImg = createImage("./assets/badBoyHalo.gif")
 gnfImg = loadImage("./assets/georgeNF.png")
 dreamImg = createImage("./assets/dream.gif")
 sapnapImg = createImage("./assets/sapnap.gif")
 karlJImg = createImage("./assets/karlJacobs.gif")
 skeppyImg = createImage("./assets/skeppy.gif")
 ranbooImg = createImage("./assets/ranboo.gif")
 quackityImg = createImage("./assets/quackity.gif")
 technobladeImg = createImage("./assets/technoblade.gif")
 wilburSImg = createImage("./assets/wilburSoot.gif")
 tommyImg = createImage("./assets/wilberSoot.gif")
 tubboImg = createImage("./assets/wilberSoot.gif")

 
 obstacle1Img = loadImage("./assets/obstacle.jpg")
 obstacle2Img = loadImage("./assets/obstacle2.jpg")
 obstacle3Img = loadImage("./assets/obstacle3.jpg")
 obstacle4Img = loadImage("./assets/obstacle4.jpg")
 gameOverImg = createImage("./assets/gameOver.gif")
}

function setup() {
 createCanvas(500,500)

 playersG = new Group();
 obstaclesG = new Group();
 spawnObstacles();

 score=0;
}

function draw() {
 background("white")
 text ("Score: "+ score,400,50);

 if (playersG.collide(obstaclesG)){
     gameState === END
     playersG.destroyEach();
     obstaclesG.destroyEach();
}

 drawSprites()
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
      var obstacle = createSprite(500,165,10,40);
      obstacle.velocityX = -6;


      var rand = Math.round(random(1,4));
      switch(rand) {
          case 1: obstacle.addImage(obstacle1Img)
                  break;
          case 2: obstacle.addImage(obstacle2Img)
                  break;
          case 3: obstacle.addImage(obstacle3Img)
                  break;
          case 4: obstacle.addImage(obstacle4Img)
                  break;
          default: break;
        }

        obstacle.scale=0.5;
        obstacle.lifetime = 250;

        obstaclesG.add(obstacle)
    }
}

function playerCharacters(){
  if (frameCount % 10000){
       var rand = Math.round(random(1,12))
       switch(rand){
          case 1: player.addImage(bbhImg)
          case 2: player.addImage(dreamImg)
          case 3: player.addImage(gnfImg)
          case 4: player.addImage(skeppyImg)
          case 5: player.addImage(tommyImg)
          case 6: player.addImage(tubboImg)
          case 7: player.addImage(ranbooImg)
          case 8: player.addImage(technobladeImg)
          case 9: player.addImage(quackityImg)
          case 10: player.addImage(sapnapImg)
          case 11: player.addImage(karlJImg)
          case 12: player.addImage(wilburSImg)
        }
        
        player.scale=0.5
        playersG.add(player)  
}
}