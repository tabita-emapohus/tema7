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
     //planeta1
    fill("gray");
    circle(1140, 240,100,100);

    //planeta2
    fill("lightblue");
    circle(1200, 410,100,100);

    //planeta3
    fill("lightyellow");
    circle(548,250,20,20);

    //planeta4
    fill("lightgreen");
    circle(430,250,35,35);

    //planeta5
    fill("lightorange");
    circle(340,235,48,48);

}
