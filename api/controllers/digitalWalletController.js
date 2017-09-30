'use strict';


var mongoose = require('mongoose'),
  Wallet = mongoose.model('Wallets');

exports.list_all_tasks = function(req, res) {
  Wallet.find({}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};




exports.create_an_account = function(req, res) {
  var new_account = new Wallet(req.body);
  new_account.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.read_an_account = function(req, res) {
  Wallet.findById(req.params.accountId, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.update_an_account = function(req, res) {
  Wallet.findOneAndUpdate({_id: req.params.accountId}, req.body, {new: true}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.delete_an_account = function(req, res) {


  Wallets.remove({
    _id: req.params.accountId
  }, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'Wallet successfully deleted' });
  });
};