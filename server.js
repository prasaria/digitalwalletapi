var express = require('express');
var app = express();
var  port = process.env.PORT || 8080;
var  mongoose = require('mongoose');
var  Wallet = require('./api/models/digitalWalletModel'); //created model loading here
var  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Walletdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/digitalWalletRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


console.log('digitalWallet RESTful API server started on: ' + port);