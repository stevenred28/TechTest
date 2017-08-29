/**
 * Steve Delfin's test
 */

module.exports = function(app){
    var Functions = require('./controllers/Functions');
    app.get('/sum', Functions.sum);
};
