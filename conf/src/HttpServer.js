import express from'express';
import livereload from'express-livereload';

const port = '8000';
const app = express();
const docRoot = __dirname + '/../build';

console.log(`Document Root: ${docRoot}`);
app.use(express.static(docRoot));

// handling 404 pages
app.get('*', function(req, res) {
  res.status(404).send('Server.js > 404 - Page Not Found');
});

// global error catcher, need four arguments
app.use((err, req, res, next) => {
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);
  res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
  console.log('uncaughtException: ', evt);
});

// app.get("/", (req, res) => {
//   res.status(200).send("OK");
// });

app.listen(port, function(){
  let timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Listening on port ${port}`);
});

livereload(app, {watchDir: docRoot});
