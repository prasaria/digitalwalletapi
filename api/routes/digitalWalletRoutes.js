'use strict';
module.exports = function(app) {
  var digitalWallets = require('../controllers/digitalWalletControllers');

  // digitalWallets Routes
  app.route('/accounts')
    .get(digitalWallets.list_all_accounts)
    .post(digitalWallets.create_an_account);


  app.route('/accounts/:accountId')
    .get(digitalWallets.read_an_account)
    .put(digitalWallets.update_an_account)
    .delete(digitalWallets.delete_an_account);
};