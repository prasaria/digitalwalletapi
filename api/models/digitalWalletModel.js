'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var integerValidator = require('mongoose-integer');


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
        type: Number,
        integer: true
    }
});

WalletSchema.plugin(integerValidator);

module.exports = mongoose.model('Wallets', WalletSchema);