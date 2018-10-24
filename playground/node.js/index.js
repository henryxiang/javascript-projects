const glob = require('glob');

glob('./lib/*.js', (err, files) => {
  if (err) {
    console.error(error);
    return;
  }
  files.forEach(file => {
    require(file)();
  });
});