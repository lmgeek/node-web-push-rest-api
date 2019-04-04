const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.locals.metaTags = {
        title: 'Web-Push-API',
        description: 'Web Push Notification Full Stack Application With Node Js Restful API',
        keywords: 'Web Push Notification Full Stack Application With Node Js Restful API',
        generator: '0.0.0.1',
        author: 'Luis Marin'
    };
    res.json({
		code: 200,
        status: 'ok',
        message: 'Server is running'
    });
});

module.exports = router;