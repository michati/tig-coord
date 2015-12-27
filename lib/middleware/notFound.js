/**
 * Created by michati on 12/27/15.
 */
var logger = require("../logger");

exports.index = function(req, res, next){
    logger.error('Not Found');
    res.json(404, 'Not Found.');
};
