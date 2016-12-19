const sketch = (p) => {
  let gray = 50
  let diameter = 0

  p.setup = () => {
    p.createCanvas(600, 400)
  }

  p.draw = () => {
    p.background(gray)
    p.ellipse(p.width / 2, p.height / 2, diameter, diameter)
    if (diameter > 400) {
      diameter = 0
    } else {
      diameter += 2
    }
  }

  // p.mousePressed = () => {
  //   gray = (gray + 16) % 256
  // }
}

export default sketch
