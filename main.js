// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
Rect(80, 260, 460, 80, "fillRect");
// ctx.fillRect(80, 260, 460, 80);

// Filled Triangle for Hair
tri(180, 80, 140, 100, 220, 100, `ctx.fill()`);
// ctx.beginPath();
// ctx.moveTo(180, 80);
// ctx.lineTo(140, 100);
// ctx.lineTo(220, 100);
// ctx.fill();

// Filled Triangle for Hair
tri(340, 80, 300, 100, 380, 100, `ctx.fill()`);
// ctx.beginPath();
// ctx.moveTo(340, 80);
// ctx.lineTo(300, 100);
// ctx.lineTo(380, 100);
// ctx.fill();

// Outlined Triangle for Hair
tri(260, 80, 220, 100, 300, 100, `ctx.stroke()`);
// ctx.beginPath();
// ctx.moveTo(260, 80);
// ctx.lineTo(220, 100);
// ctx.lineTo(300, 100);
// ctx.closePath();
// ctx.stroke();

// Outlined Triangle for Hair
tri(420, 80, 380, 100, 460, 100, `ctx.stroke()`);
// ctx.beginPath();
// ctx.moveTo(420, 80);
// ctx.lineTo(380, 100);
// ctx.lineTo(460, 100);
// ctx.closePath();
// ctx.stroke();

// Filled Triangle for Neck
tri(300, 200, 220, 600, 380, 600, `ctx.fill()`);
// ctx.beginPath();
// ctx.moveTo(300, 200);
// ctx.lineTo(220, 600);
// ctx.lineTo(380, 600);
// ctx.fill();

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
Rect(100, 100, 400, 400, "fillRect");
// ctx.fillRect(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, `ctx.fill()`);
// ctx.beginPath();
// ctx.arc(200, 250, 50, 0, 2 * Math.PI);
// ctx.fill();

// Filled Circle for Right Eye Socket
circle(400, 250, 50, `ctx.fill()`);
// ctx.beginPath();
// ctx.arc(400, 250, 50, 0, 2 * Math.PI);
// ctx.fill();

// Rectangle for Mouth
Rect(200, 350, 200, 60, "fillrect");
// ctx.fillRect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380);
// ctx.beginPath();
// ctx.moveTo(200, 380);
// ctx.lineTo(400, 380);
// ctx.stroke();

// First Vertical Line for Teeth
line(250, 350, 250, 410);
// ctx.beginPath();
// ctx.moveTo(250, 350);
// ctx.lineTo(250, 410);
// ctx.stroke();

// Second Vertical Line for Teeth
line(300, 350, 300, 410);
// ctx.beginPath();
// ctx.moveTo(300, 350);
// ctx.lineTo(300, 410);
// ctx.stroke();

// Third Vertical Line for Teeth
line(350, 350, 350, 410);
// ctx.beginPath();
// ctx.moveTo(350, 350);
// ctx.lineTo(350, 410);
// ctx.stroke();

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(200, 250, 30, `ctx.fill()`);
// ctx.beginPath();
// ctx.arc(200, 250, 30, 0, 2 * Math.PI);
// ctx.fill();

// Filled Circle for Right Eye
circle(400, 250, 10, `ctx.fill()`);
// ctx.beginPath();
// ctx.arc(400, 250, 10, 0, 2 * Math.PI);
// ctx.fill();

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, `ctx.stroke()`);
// ctx.beginPath();
// ctx.arc(200, 250, 50, 0, 2 * Math.PI);
// ctx.stroke();

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, `ctx.stroke()`);
// ctx.beginPath();
// ctx.arc(400, 250, 50, 0, 2 * Math.PI);
// ctx.stroke();

// Line for Left Eyebrow
ctx.lineWidth = 2;
line(150, 180, 250, 180);
// ctx.beginPath();
// ctx.moveTo(150, 180);
// ctx.lineTo(250, 180);
// ctx.stroke();

// Line for Right Eyebrow
line(350, 160, 450, 180);
// ctx.beginPath();
// ctx.moveTo(350, 160);
// ctx.lineTo(450, 180);
// ctx.stroke();

// Outlined Triangle for Nose
tri(300, 280, 320, 320, 280, 320, `ctx.stroke()`);
// ctx.beginPath();
// ctx.moveTo(300, 280);
// ctx.lineTo(320, 320);
// ctx.lineTo(280, 320);
// ctx.closePath();
// ctx.stroke();

// line for forehead wrinkle
ctx.strokeStyle = "rgb(46, 45, 45)";
line(300, 120, 300, 150);

// triangle for beard
ctx.fillStyle = "rgb(45, 45, 45)";
tri(300, 530, 280, 480, 320, 480, `ctx.fill()`);

//CIRCLE FUNCTION
function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  eval(`${type}`);
}

//RECTANGLE FUNCTION
function Rect(x, y, w, h, type) {
  ctx.fillRect(x, y, w, h);
}

//LINE FUNCTION
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// TRIANGLE FUNCTION
function tri(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  eval(`${type}`);
}

//butt chin (x1=300 y2=120 x2=300 y2=150)
// beard (x=300 y=530 x2=280 y2=480 x3=320 y3=480)
