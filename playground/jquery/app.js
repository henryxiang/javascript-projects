$(() => {
  const info = $('<div>').text('Hello, World!');
  const loc = $('<div>');
  const btn = $('<button>').text('Click Me');

  $('#app').append(info, loc, btn);

  btn.click(() => info.text('You clicked me.').show());

  info.click(() => info.hide());

  $('body').mousemove((e) => loc.text(`${e.clientX}, ${e.clientY}`));
})

