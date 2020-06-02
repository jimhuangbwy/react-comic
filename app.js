const path = require('path');

const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = process.env.PORT || 3000;

nunjucks.configure('src/views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
