import greet from './dummy';
import SVG from 'svg.js';

const app = document.querySelector('#app');
app.innerHTML = greet('World');

const svg = SVG('svg').size(400, 400);
const rect = svg.rect(100, 100).attr({ fill: '#f06' }).dmove(50, 50);

rect
  .animate({ ease: '<>', delay: '0.5s' })
  // .dmove(0, 200)
  .rotate(360)
  .move(50, 250);
  
rect
  .animate({ ease: '<>', delay: '0.5s' })
  // .dmove(0, -200)
  .rotate(-360);
