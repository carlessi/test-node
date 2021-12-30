# test-node
Tentativa aula de prog NODE EXPRESS e banco de dados segundo o tutorial
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

const express = require('express');
const app = express();

exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };
const square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));
module.exports = {
  area: function(width) {
    return width * width;
  },

  perimeter: function(width) {
    return 4 * width;
  }
};

