const express = require('express');
const path = require('path');

const port = 3000;
const context = '/demo';
const documentRoot = path.join(__dirname, 'public');

const app = express();

app.use(context, express.static(documentRoot));

app.listen(port, () => {
  console.log(`Server URL: http://localhost:${port}${context}`);
});
