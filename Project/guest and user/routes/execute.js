var express = require('express');
var router = express.Router();

router.get('/:paymentId', function(req, res, next) {
    var paymentId = req.session.paymentId;
    var payerId = req.param('PayerID');

    var details = { "payer_id": payerId };
    paypal.payment.execute(paymentId, details, function(error, payment) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/thank');
        }
    });
});

module.exports = router;