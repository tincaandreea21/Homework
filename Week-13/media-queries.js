var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var blueBall = {
  x: 100,
  y: 100,
  radius: 40,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

var grayBall = {
  x: 100,
  y: 300,
  radius: 40,
  color: "gray",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

blueBall.draw();
grayBall.draw();

var triangle = {
  x: 500,
  y: 500,
  color: "black",
  draw: function () {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

triangle.draw();

let canvasAnimation = document.getElementById("canvas-animation");
let context = canvasAnimation.getContext("2d");

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw: function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
  },
};

function draw() {
  context.clearRect(0, 0, canvasAnimation.width, canvasAnimation.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvasAnimation.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvasAnimation.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvasAnimation.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvasAnimation.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();

// catName("mimi");
console.log(a);
var a = 2;
var catName = function (name) {
  console.log(`my cat name is ${name}`);
};


// let unique = [...new Set(array)];

// console.log(unique);
