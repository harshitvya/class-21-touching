var move, unmove, move1, move2;

function setup() {
    createCanvas(800, 400);
    move = createSprite(200, 200, 50, 50);
    move1 = createSprite(500, 200, 50, 50);
    move2 = createSprite(700, 200, 50, 50);
    unmove = createSprite(400, 200, 100, 100);
    move.debug = true;
    unmove.debug = true;
}

function draw() {
    background(0);
    move.x = mouseX;
    move.y = mouseY;
    console.log(move.x - unmove.x);
    console.log(unmove.x - move.x);
    if (Touching(move, move1)) {
        move.shapeColor = "red";
        move1.shapeColor = "red";
    } else {
        move1.shapeColor = "blue";
    }
    if (Touching(move, move2)) {
        move.shapeColor = "red";
        move2.shapeColor = "red";
    } else {
        move2.shapeColor = "blue";
    }
    if (Touching(move, unmove)) {
        move.shapeColor = "red";
        unmove.shapeColor = "red";
    } else {
        unmove.shapeColor = "blue";
    }

    drawSprites();
}