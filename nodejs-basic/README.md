## Node.js with ES6

A JavaScript project template demonstrating how to load and run ES6 modules with node.js using 'babel-register' module.

### Project structure

* index.js - The startup script to bootstrap the application from an ES6 entry point
* src/app.js - The default application entry point, which is configurable with 'NODE_APP_ENTRY' environment variable
* src/ - The source directory which contains source files written in ES6 or plain old JavaScript
* build/ - The output directory for JavaScripts that are transpiled by Babel
* scripts/ - The directory that stores npm run scripts (written in pure JavaScript)


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
