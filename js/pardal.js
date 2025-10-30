let boques = ["👅", "👄", "🫦"];
//let p1,p2;
let p = [];
function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < 300; i++) {
    p[i] = new Pardal(width, random(height), ceil(random(-1, 2)));
  }
  //p1= new Pardal(width,100, ceil(random(-1,2)));
}

function draw() {
  background("#5ecbea");
  for (let i = 0; i < p.length; i++) {
    p[i].show();
    p[i].move();
  }
  //p1.show();
  //p1.move();
}

class Pardal {
  constructor(x, y, rb) {
    this.x = x;
    this.y = y;
    this.rab = rb;
  }
  show() {
    strokeWeight(2);
    translate(this.x, this.y);
    push();
    scale(0.6);
    fill("#ff63ff");
    triangle(0, 200, 100, 200, 100, 150);
    ellipseMode(CORNER);
    fill("#ffcc00");
    ellipse(100, 140, 150, 75);
    textSize(40);
    text("👀", 140, 160);
    text(boques[this.rab], 140, 200);
    pop();
  }
  move() {
    this.x = this.x - 1;
    if (this.x < -250) {
      this.x = width;
    }
  }
}
