const PI = 3.14159

class Ball {
  constructor(p) {
    this.x = 300
    this.y = 200
    this.diameter = 25
    this.speed = 10
    this.direction = PI/4
    this.speedX = this.speed * p.cos(this.direction)
    this.speedY = this.speed * p.sin(this.direction)
  }

  detectCollision(p) {
    if (this.x < this.diameter/2 || this.x > p.width - this.diameter/2) {
      this.speedX = -this.speedX;
    } else if (this.y < this.diameter/2 || this.y > p.height - this.diameter/2) {
      this.speedY = -this.speedY;
    }
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  render(p) {
    this.detectCollision(p);
    this.move();
    p.ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

const sketch = (p) => {
  let bgColor = 50
  let ball = new Ball(p)

  p.setup = () => {
    p.createCanvas(600, 400)
  }

  p.draw = () => {
    p.background(50)
    ball.render(p)
  }
}

export default sketch
