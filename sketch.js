var canvas;
var music;
var block1 , block2,block3 , block4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(40,580,200,20)
block1.shapeColor = "blue"
block2 = createSprite(260,580,200,20)
block2.shapeColor = "red"
block3 = createSprite(480,580,200,20)
block3.shapeColor = "black"
block4 = createSprite(700,580,200,20)
block4.shapeColor = "green"
    //create box sprite and give velocity
box = createSprite(random(20,750),100,40,40)
box.shapeColour = "white"
box.velocityX = 5
box.velocityY = -3
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges)



    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box)&& box.bounceOff(block1)){
        box.shapeColour = "blue"
        music.play()
    }
    if(block2.isTouching(box)){
        box.shapeColour = "red"
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }

if(block3.isTouching(box)&& box.bounceOff(block3)){
    box.shapeColour = "black"
    music.play()
}
if(block4.isTouching(box)){
    box.shapeColour = "green"
    music.stop()
    box.velocityX = 0;
    box.velocityY = 0;
}

drawSprites()
}
