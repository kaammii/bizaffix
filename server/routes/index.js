var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

var mongodbUri = 'mongodb://kamrannazir:kamran@ds151433.mlab.com:51433/patientdata';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {console.log("Great success!")});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
