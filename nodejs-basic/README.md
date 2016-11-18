## Node.js with ES6

It is possible to load and run ES6 modules with plain old node.js using babel-register NPM module.

### Project structure

* index.js - ES6 module loader to load and run ES6 modules
* src/app.js - The default application entry point, which is configurable with 'NODE_APP_ENTRY' environment variable
* src/ - Source file directory
* build/ - The output directory for transpiled JavaScripts
* scripts/ - The directory for npm run scripts


### Install node module dependencies
```
npm intall
```

### Run application
```
npm start
```

### Run application in development mode
```
npm run dev
```
Development mode allows developer to "live eidt" the source code and see results immediately upon saving the changes. Hit Ctrl+C to exit development mode.

### Transpile ES6 files to JavaScript files
```
npm run build
```
The compiled JavaScripts will be put into 'build' directory. Developer can compare the Babel generated JavaScript with the original ES6 code.
