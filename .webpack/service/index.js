(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./conf sync recursive ^\\.\\/config\\..*$":
/*!************************************!*\
  !*** ./conf sync ^\.\/config\..*$ ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./config.dev\": \"./conf/config.dev.js\",\n\t\"./config.dev.js\": \"./conf/config.dev.js\",\n\t\"./config.global\": \"./conf/config.global.js\",\n\t\"./config.global.js\": \"./conf/config.global.js\",\n\t\"./config.test\": \"./conf/config.test.js\",\n\t\"./config.test.js\": \"./conf/config.test.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./conf sync recursive ^\\\\.\\\\/config\\\\..*$\";\n\n//# sourceURL=webpack:///./conf_sync_^\\.\\/config\\..*$?");

/***/ }),

/***/ "./conf/config.dev.js":
/*!****************************!*\
  !*** ./conf/config.dev.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var config = __webpack_require__(/*! ./config.global.js */ \"./conf/config.global.js\");\n\nconfig.env = 'dev';\nconfig.hostname = 'https://www.devedit.bostonglobe.com';\nconfig.awsEndpoint = \"http://localhost:8000\";\nconfig.storyJsonEndpoint = \"https://devedit.bostonglobe.com/eom/SysConfig/WebPortal/BostonGlobe/Framework/sandbox/mmartin/fuubar.jsp\";\nmodule.exports = config;\n\n//# sourceURL=webpack:///./conf/config.dev.js?");

/***/ }),

/***/ "./conf/config.global.js":
/*!*******************************!*\
  !*** ./conf/config.global.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var config = {\n  awsAccessKeyId: process.env.AWS_ACCESS_KEY || \"\",\n  secretAccessKeyId: process.env.AWS_SECRET_ACCESS_KEY || \"\"\n};\nmodule.exports = config;\n\n//# sourceURL=webpack:///./conf/config.global.js?");

/***/ }),

/***/ "./conf/config.test.js":
/*!*****************************!*\
  !*** ./conf/config.test.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var config = __webpack_require__(/*! ./config.global */ \"./conf/config.global.js\");\n\nconfig.env = 'qa';\nconfig.hostname = 'https://www.qaedit.bostonglobe.com';\nconfig.awsEndpoint = \"https://www.someEndPoint.amazon.com\";\nconfig.storyJsonEndpoint = \"https://qaedit.bostonglobe.com/eom/SysConfig/WebPortal/BostonGlobe/Framework/sandbox/mmartin/fuubar.jsp\";\nmodule.exports = config;\n\n//# sourceURL=webpack:///./conf/config.test.js?");

/***/ }),

/***/ "./conf/index.js":
/*!***********************!*\
  !*** ./conf/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var env = process.env.TIER_ENV || 'dev';\n\nvar config = __webpack_require__(\"./conf sync recursive ^\\\\.\\\\/config\\\\..*$\")('./config.' + env);\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./conf/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: getStory, createTopic, readTopic, updateTopic, deleteTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStory\", function() { return getStory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTopic\", function() { return createTopic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readTopic\", function() { return readTopic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTopic\", function() { return updateTopic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTopic\", function() { return deleteTopic; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils/index.js\");\n // story stuff\n\nconst getStory = event => {\n  const loid = (event.queryStringParameters || {}).loid || \"\";\n  return _utils__WEBPACK_IMPORTED_MODULE_0__[\"readStory\"](loid).then(res => {\n    if (!res.ok) {\n      throw Error(res.statusText);\n    }\n\n    return res;\n  }).then(res => res.buffer()).then(buffer => _utils__WEBPACK_IMPORTED_MODULE_0__[\"uploadFileToS3\"](`foobar.${loid}`, buffer)).catch(error => {\n    return {\n      statusCode: error.statusCode || 500,\n      body: `Error: ${_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseError\"](error)}`\n    };\n  });\n}; // topic plan stuff\n\nconst createTopic = event => {\n  const loid = (event.queryStringParameters || {}).loid || \"\";\n  const body = event.body || \"\";\n  return _utils__WEBPACK_IMPORTED_MODULE_0__[\"createTopicUtil\"](loid, body).then(res => ({\n    statusCode: 200,\n    body: `Success: ${JSON.stringify(res)}`\n  })).catch(error => {\n    return {\n      statusCode: error.statusCode || 500,\n      body: `Error: ${_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseError\"](error)}`\n    };\n  });\n};\nconst readTopic = event => {\n  const loid = (event.queryStringParameters || {}).loid || \"\";\n  return _utils__WEBPACK_IMPORTED_MODULE_0__[\"readTopicUtil\"](loid).then(topic => ({\n    statusCode: 200,\n    body: topic\n  })).catch(error => {\n    return {\n      statusCode: error.statusCode || 500,\n      body: `Error: ${_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseError\"](error)}`\n    };\n  });\n};\nconst updateTopic = event => {\n  const loid = event.queryStringParameters.loid;\n  const body = event.body || \"\";\n  return _utils__WEBPACK_IMPORTED_MODULE_0__[\"readTopicUtil\"](loid).then(topic => JSON.stringify(Object.assign(JSON.parse(body), JSON.parse(topic)))).then(newBody => _utils__WEBPACK_IMPORTED_MODULE_0__[\"createTopicUtil\"](loid, newBody)).then(res => ({\n    statusCode: 200,\n    body: `Success: ${JSON.stringify(res)}`\n  })).catch(error => {\n    return {\n      statusCode: error.statusCode || 500,\n      body: `Error: ${_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseError\"](error)}`\n    };\n  });\n};\nconst deleteTopic = event => {\n  const loid = (event.queryStringParameters || {}).loid || \"\";\n  return _utils__WEBPACK_IMPORTED_MODULE_0__[\"deleteTopicUtil\"](loid).then(res => ({\n    statusCode: 200,\n    body: `Success: ${JSON.stringify(res)}`\n  })).catch(error => {\n    return {\n      statusCode: error.statusCode || 500,\n      body: `Error: ${_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseError\"](error)}`\n    };\n  });\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: s3bucket, uploadFileToS3, getS3Object, deleteS3Object, readStory, createTopicUtil, readTopicUtil, deleteTopicUtil, parseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s3bucket\", function() { return s3bucket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadFileToS3\", function() { return uploadFileToS3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getS3Object\", function() { return getS3Object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteS3Object\", function() { return deleteS3Object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readStory\", function() { return readStory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTopicUtil\", function() { return createTopicUtil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readTopicUtil\", function() { return readTopicUtil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTopicUtil\", function() { return deleteTopicUtil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseError\", function() { return parseError; });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conf */ \"./conf/index.js\");\n/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_conf__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst s3bucket = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__[\"S3\"]({\n  s3ForcePathStyle: true,\n  endpoint: new aws_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Endpoint\"](_conf__WEBPACK_IMPORTED_MODULE_1___default.a.awsEndpoint)\n}); // s3 stuff \n\nfunction uploadFileToS3(file, content) {\n  // TODO: Promise\n  return s3bucket.putObject({\n    Bucket: 'local-bucket',\n    Key: file,\n    Body: content\n  }).promise();\n}\nfunction getS3Object(file) {\n  // TODO: Promise\n  return s3bucket.getObject({\n    Bucket: 'local-bucket',\n    Key: file\n  }).promise();\n}\nfunction deleteS3Object(file) {\n  // TODO: Promise\n  return s3bucket.deleteObject({\n    Bucket: 'local-bucket',\n    Key: file\n  }).promise();\n} // story stuff \n\nconst readStory = loid => fetch(`${_conf__WEBPACK_IMPORTED_MODULE_1___default.a.storyJsonEndpoint}?loid=${loid}`); // topic stuff \n\nconst createTopicUtil = (loid, content) => uploadFileToS3(`topic-${loid}`, content);\nconst readTopicUtil = loid => getS3Object(`topic-${loid}`).then(res => res.Body.toString());\nconst deleteTopicUtil = loid => deleteS3Object(`topic-${loid}`); // error parse stuff\n\nfunction parseError(error) {\n  let parsedError = JSON.stringify(error);\n  parsedError = Object.is(\"{}\", parsedError) ? error.toString() : parsedError;\n  return parsedError;\n}\n\n//# sourceURL=webpack:///./utils/index.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ })

/******/ })));