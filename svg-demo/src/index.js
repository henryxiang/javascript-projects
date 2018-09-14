import SVG from 'svg.js';
import anime from 'animejs';

const svg = SVG('svg').size(600, 400);

svg.text('Hello World!').id('myText').font({ size: 0, fill: 'blue' });

svg.circle()
  .id('myCircle')
  .fill('none')
  .stroke({ width: 2, color: '#f06' })
  .move(230, 185);

anime.timeline()
  .add({
    targets: '#myText',
    translateX: 100,
    translateY: 200,
    fontSize: 48,
    duration: 2000,
    easing: 'linear',
    rotate: '1turn',
  })
  .add({
    targets: '#myCircle',
    duration: 2000,
    easing: 'linear',
    r: 150,
  });
