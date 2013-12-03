///*
var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
app.use(express.logger('dev'));
//app.use(gzippo.staticGzip("" + __dirname + "/dist"));
//app.use(gzippo.staticGzip("" + __dirname + "/"));
//app.use(express.static(__dirname + '/public'));
//app.use("/", express.static(__dirname + '/public'));
//app.use(express.static(__dirname));
//app.use("/", express.static(__dirname));
//app.use("/", express.static(__dirname + '/'));
app.use("/", express.static(__dirname + "/dist"));

/*
app.get('/', function(req, res){
	//res.render('index.ejs');
	res.render('index.html');
});
*/
app.listen(process.env.PORT || 3000);
//*/
/*
var express = require('express');
//var express = require('express'),
//  mongoose = require('mongoose'),
  //fs = require('fs'),
//  config = require('./config/config');
/*
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});
*/
/*
var app = express();

//require('./config/express')(app, config);
//require('./config/routes')(app);

//app.listen(config.port);
//app.listen(80);
app.listen(3000);
*/