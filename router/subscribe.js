const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Subscription = mongoose.model('subscribers');

router.post('/', (req, res) => {
    const subscriptionModel = new Subscription(req.body);
    subscriptionModel.save((err, subscription) => {
        if (err) {
            console.error(`Error occurred while saving subscription. Err: ${err}`);
            res.status(500).json({
                error: 'Error, Consulte a soporte'
            });
        } else {
            res.json({
				code: 200,
                data: 'Subscripción guardada.'
            });
        }
    });
});

router.get('/', (req, res) => {
            res.json({
				code: 400,
                data: 'Invalid Request Bad'
            });
});
module.exports = router;