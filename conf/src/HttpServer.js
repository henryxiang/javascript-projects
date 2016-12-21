import jsonServer from 'json-server';
import livereload from 'express-livereload';
import path from 'path';

const port = '8000';
const docRoot = path.join(process.cwd(), 'dist');

const app = jsonServer.create();
const router = jsonServer.router(`${docRoot}/db.json`);
const config = jsonServer.defaults({static: docRoot});

console.log(`Document Root: ${docRoot}`);

app.use(config);
app.use(router);

app.listen(port, () => {
    let timestamp = new Date().toISOString();
    console.log(`Server URL: http://localhost:${port}`);
});

livereload(app, {watchDir: docRoot});
