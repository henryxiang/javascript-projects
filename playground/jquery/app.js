$(() => {
  const info = $('<div>').text('Hello, World!');
  const loc = $('<div>');
  const btn = $('<button>').text('Click Me');

  $('#app').append(info, loc, btn);

  btn.click((e) => {
    if ($(e.currentTarget).text() === 'Click Me') {
      $(e.currentTarget).text('Thank You');
    } else {
      $(e.currentTarget).text('Click Me');
    }
  });

  info.click(() => info.hide());

  $('body').mousemove((e) => loc.text(`${e.clientX}, ${e.clientY}`));
})

