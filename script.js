function setup() {
    createCanvas(1460, 677)
}
function draw() {
    background("black");
    mySolarSystem();

}
function mySolarSystem() {

    //orbite
   stroke("white");
   noFill();
    ellipse(680, 300, 300, 195);
    ellipse(680, 300, 550, 220);
    ellipse(680, 300, 780, 270);
    ellipse(680, 300, 1000, 350);
    ellipse(680, 300, 1200, 450);
}
