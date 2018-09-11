import greet from './dummy';
import Snap from 'snapsvg-cjs';

const app = document.querySelector('#app');
app.innerHTML = greet('World');

const snap = Snap('#svg').attr({ width: 500, height: 500 });
const circle1 = snap.circle(100, 100, 50).attr({ fill: 'blue' });
const circle2 = snap.circle(400, 400, 50).attr({ fill: 'red' });
circle1.animate(
  { transform: 't300,300'},
  3000, mina.bounce
);
circle2.animate(
  { transform: 't-300,-300'},
  3000, mina.bounce
);
