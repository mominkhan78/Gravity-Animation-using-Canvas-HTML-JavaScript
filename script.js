var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

// c.fillStyle = "red";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "Blue";
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = "Green";
// c.fillRect(300, 300, 100, 100);

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(500, 700);
// c.strokeStyle = "purple";
// c.stroke();

// c.beginPath();
// c.arc(500, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "red";
// c.stroke();


// for (var i = 0; i < 200; i++) {

//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
// var color = ["red","green", "blue", "purple", "yellow"];
// var randomIndex = Math.floor(Math.random() * color.length);


//     c.beginPath();
//     c.strokeStyle = color[randomIndex];
//     c.arc(x, y, 30, 0, Math.PI * 2, false);

//     c.stroke();
// }


// console.log(canvas);


// var color = ["red","green", "blue", "purple", "yellow"];

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = ["red", "green", "blue", "purple", "yellow"];
//     this.randomIndex = Math.floor(Math.random() * color.length);

//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = "red";
//         // c.stroke();
//         c.fillStyle = this.color[this.randomIndex];
//         c.fill();

//     }

//     this.update = function () {

//         if (this.x + radius > innerWidth || this.x - radius < 0) {
//             this.dx = -this.dx;
//         }
//         if (this.y + radius > innerHeight || this.y - radius < 0) {
//             this.dy = -this.dy;
//         }

//         this.x += this.dx;
//         this.y += this.dy;

//         if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
//             if(this.radius < 40){
//                 this.radius += 1;
//             }

//         }
//         else{
//             if(this.radius > this.minRadius){
//                 this.radius -= 1;
//             }
//         }

//         this.draw();
//     }
// }

// window.addEventListener('resize', function () {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     init();
// })

// var mouse = {
//     x: undefined,
//     y: undefined
// }
// window.addEventListener('mousemove', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;

// })


// var circleArray = [];

// function init(){
//     circleArray = [];
//     for (var i = 0; i < 800; i++) {
//         var x = Math.random() * (window.innerWidth - radius * 2) + radius;
//         var y = Math.random() * (window.innerHeight - radius * 2) + radius;
//         var dx = (Math.random() - 0.5);
//         var dy = (Math.random() - 0.5);
//         var radius = Math.random()*3 + 1;
//         circleArray.push(new Circle(x, y, dx, dy, radius));
//     }
// }





// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     for (var i = 0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }

// }
// animate();
// init();

var color = ["red","green", "blue", "purple", "yellow"];

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})

var gravity = 1;

function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.friction = 0.99;
    this.color = ["red", "green", "blue", "purple", "yellow"];
    this.randomIndex = Math.floor(Math.random() * color.length);

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fillStyle = this.color[this.randomIndex];
        c.fill();
        c.strokeStyle = "Black";
        c.closePath();
    }

    this.update = function () {
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy * 0.95;
        }
        else {
            this.dy += gravity;
        }
        this.y += this.dy;
        this.draw();
    }

}

var ballArray = [];

function init() {
    for (var i = 0; i < 300; i++) {
        var radius = 20;
        var x = Math.random() * innerWidth;
        var y = Math.random() * (innerHeight-radius*2)+ radius;
        var dx = Math.random() * 2;
        var dy = Math.random() * 3 + 1;
        ballArray.push(new Ball(x, y, dx, dy, radius));
    }
}

init(); // Initialize the balls before starting the animation

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].update();
    }
}

animate();
