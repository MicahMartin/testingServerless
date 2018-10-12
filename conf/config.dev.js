var config = require('./config.global.js');

config.env = 'dev';
config.hostname = 'https://www.devedit.bostonglobe.com';

config.awsEndpoint = "http://localhost:8000";
config.storyJsonEndpoint = "https://devedit.bostonglobe.com/eom/SysConfig/WebPortal/BostonGlobe/Framework/sandbox/mmartin/fuubar.jsp";

module.exports = config;
