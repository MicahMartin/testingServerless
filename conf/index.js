var env = process.env.TIER_ENV || 'dev';
var config = require('./config.'+env);

module.exports = config;

