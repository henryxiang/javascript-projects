import './app.css';
import $ from 'jquery';

$('#app').append('<a href="#" id="showCats">Show All Cats</a><br/><div id="viewPort"/>');

$('#showCats').click(() => {
  System
    .import('./cats.js')
    .then((module) => {
      console.log("cats:", module.default);
      $('#viewPort').html('<ul id="cats"></ul>');
      for (let cat of module.default) {
        $('#cats').append(`<li>${cat}</li>`);
      }
    })
})