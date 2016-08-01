const path = require('path');
const myPath = path.join(__dirname, '../');
require('./site.css');
const logo = require('./pogo.png');
console.log(logo);

const mod1 = require('./module-output');

const mod2 = require('./module-pass-through');