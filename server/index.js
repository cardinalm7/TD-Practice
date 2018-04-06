var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,'../ToDo/static/')));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('App listening on port 3000!'))