var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// express.get('/', function(req, res){

//   // save html files in the `views` folder...
//   express.sendfile(__dirname + "/views/index.html");
// });

module.exports = router;
