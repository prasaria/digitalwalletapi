'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WalletSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the person'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  balance: {
    type: Int32Array,
    default: 100000
  }
});

module.exports = mongoose.model('Wallets', WalletSchema);