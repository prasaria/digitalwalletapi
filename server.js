var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Wallet = require('./api/models/digitalWalletModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Walletdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/digitalWalletRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('digitalWallet RESTful API server started on: ' + port);