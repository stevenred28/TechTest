/**
 * Steve Delfin's test
 */

var express = require('express');
var app = express();

require('./Routes')(app);

app.listen(3001);
console.log('listening to port 3001..');