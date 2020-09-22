var express = require('express');
var router = express.Router();

/* GET home page. */
//var CalculateCircumference = require('./utils');

router.get('/', function(req, res) { 'use strict';
    res.render('index', { title: 'NodeRouteBasics Tembo' });
});

router.get('/getOneMile', function(request, response) {
    'use strict';
    response.send({'result': 5280});
});

router.get('/feetFromMiles', function(request, response) {
    'use strict';
    console.log('feet from miles:', request.query);
    response.send({result: request.query.miles * 5280});
});
router.post('/Circumference', function(request, response) {
    'use strict';

    response.send({'result': request.body.radius * 2 * Math.PI});
});

module.exports = router;

