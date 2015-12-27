/**
 * Created by michati on 12/27/15.
 */
var express = require('express'),
    http = require('http'),
    config = require('../configuration'),
    heartbeat = require('../routes/heartbeat'),
    notFound = require('../middleware/notFound'),
    app = express();

// Instead of hard coding 3000, we can config.get("express:port")
app.set('port', config.get("express:port"));
app.use(express.logger({ immediate: true, format: 'dev' }));
app.get('/heartbeat', heartbeat.index);
app.use(notFound.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;