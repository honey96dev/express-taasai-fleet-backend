/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bin/start-webapp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-form-data */ \"express-form-data\");\n/* harmony import */ var express_form_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_form_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var ddos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ddos */ \"ddos\");\n/* harmony import */ var ddos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ddos__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _routes_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/api */ \"./src/routes/api.js\");\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst cwd = process.cwd();\nconst ddos = new ddos__WEBPACK_IMPORTED_MODULE_8___default.a({\n  maxcount: process.env.DDOS_MAXCOUNT,\n  burst: process.env.DDOS_BURST,\n  limit: process.env.DDOS_LIMIT\n});\nconst options = {\n  uploadDir: os__WEBPACK_IMPORTED_MODULE_4___default.a.tmpdir(),\n  autoClean: true\n}; // view engine setup\n\napp.set(\"views\", path__WEBPACK_IMPORTED_MODULE_1___default.a.join(cwd, \"views\"));\napp.set(\"view engine\", \"pug\");\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\n-app.use(express_form_data__WEBPACK_IMPORTED_MODULE_3___default.a.parse(options));\napp.use(express_form_data__WEBPACK_IMPORTED_MODULE_3___default.a.format());\napp.use(express_form_data__WEBPACK_IMPORTED_MODULE_3___default.a.stream());\napp.use(express_form_data__WEBPACK_IMPORTED_MODULE_3___default.a.union());\n true && app.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()());\napp.use(\"/assets\", express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(cwd, \"public\")));\napp.use(\"/api\", _routes_api__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(cwd, \"frontend\")));\napp.get(\"*\", (req, res) => {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(cwd, \"frontend/index.html\"));\n}); // error handler\n\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get(\"env\") === \"development\" ? err : {}; // render the error page\n\n  res.status(err.status || 500);\n  res.render(\"error\");\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/bin/start-webapp.js":
/*!*********************************!*\
  !*** ./src/bin/start-webapp.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app */ \"./src/app.js\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cluster */ \"cluster\");\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cluster__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n\n\n\n\n\n\n\nlet debug;\nlet port;\nlet sslPort;\nlet httpServer;\nlet httpsServer;\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isMaster) {\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  cluster__WEBPACK_IMPORTED_MODULE_4___default.a.on(\"exit\", function (worker, code, signal) {\n    cluster__WEBPACK_IMPORTED_MODULE_4___default.a.fork();\n  });\n}\n\nif (cluster__WEBPACK_IMPORTED_MODULE_4___default.a.isWorker) {\n  debug = new debug__WEBPACK_IMPORTED_MODULE_1___default.a(\"express:server\");\n  port = normalizePort(core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].port);\n  sslPort = normalizePort(core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslPort);\n  app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"port\", port);\n  httpServer = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  httpServer.listen(port);\n  httpServer.on(\"error\", onError);\n  httpServer.on(\"listening\", onListening);\n  const credentials = {\n    key: fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslKey),\n    cert: fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslCert),\n    ca: [fs__WEBPACK_IMPORTED_MODULE_5___default.a.readFileSync(core_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"].sslCA)],\n    passphrase: \"abc123\"\n  };\n  httpsServer = https__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(credentials, app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  httpsServer.listen(sslPort);\n  httpsServer.on(\"error\", onError);\n  httpsServer.on(\"listening\", onSslListening);\n}\n\nfunction normalizePort(val) {\n  const port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\nfunction onError(error) {\n  if (error.syscall !== \"listen\") {\n    throw error;\n  }\n\n  const bind = typeof port === \"string\" ? \"Pipe \" + port : \"Port \" + port; // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case \"EACCES\":\n      console.error(bind + \" requires elevated privileges\");\n      process.exit(1);\n      break;\n\n    case \"EADDRINUSE\":\n      console.error(bind + \" is already in use\");\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n}\n\nfunction onListening() {\n  const addr = httpServer.address();\n  const bind = typeof addr === \"string\" ? \"pipe \" + addr : \"port \" + addr.port;\n  debug(\"Listening on \" + bind);\n  console.log(\"Listening on \" + bind);\n}\n\nfunction onSslListening() {\n  const addr = httpsServer.address();\n  const bind = typeof addr === \"string\" ? \"pipe \" + addr : \"port \" + addr.port;\n  debug(\"Listening on \" + bind);\n  console.log(\"Listening on \" + bind);\n}\n\n//# sourceURL=webpack:///./src/bin/start-webapp.js?");

/***/ }),

/***/ "./src/core/config.js":
/*!****************************!*\
  !*** ./src/core/config.js ***!
  \****************************/
/*! exports provided: server, mysql, session, dbTblName, smtp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"server\", function() { return server; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mysql\", function() { return mysql; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"session\", function() { return session; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbTblName\", function() { return dbTblName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smtp\", function() { return smtp; });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst server = {\n  isDev: false,\n  port: process.env.HTTP_PORT,\n  sslPort: process.env.HTTPS_PORT,\n  baseUrl: process.env.BASE_URL,\n  name: \"hrgulf.org\",\n  description: \"Portal in hrgulf.org\",\n  author: \"Zhenlong J.\",\n  secret: \"hrgulf@@\",\n  sslKey: \"./sslcert/server.key\",\n  sslCert: \"./sslcert/1e720c418ffe9875.crt\",\n  sslCA: \"./sslcert/gd_bundle-g2-g1.crt\",\n  environment: \"development\"\n};\nconst mysql = {\n  connectionLimit: 10,\n  host: process.env.MYSQL_HOST,\n  port: process.env.MYSQL_PORT,\n  user: process.env.MYSQL_USER,\n  password: process.env.MYSQL_PASSWORD,\n  database: process.env.MYSQL_DATABASE\n};\nconst postgres = {\n  connectionLimit: 10,\n  host: process.env.POSTGRES_HOST,\n  port: process.env.POSTGRES_PORT,\n  user: process.env.POSTGRES_USER,\n  password: process.env.POSTGRES_PASSWORD,\n  database: process.env.POSTGRES_DATABASE,\n  timeout: 60000\n};\nconst session = {\n  name: \"fleet.taasai.com\",\n  key: \"fleet.taasai.com\",\n  secret: \"fleet.taasai.com@@\"\n};\nconst dbTblName = {\n  core: {\n    users: \"fleets\",\n    avatars: \"core_avatars\",\n    signInHistory: \"core_sign_in_history\"\n  },\n  resetPasswordTokens: \"reset_password_tokens\"\n};\nconst smtp = {\n  // service: 'gmail',\n  host: 'smtp.office365.com',\n  secureConnection: true,\n  port: 587,\n  // secure: true,\n  user: 'pm@eliteresources.co',\n  pass: 'Theelite6*',\n  limit: {\n    receipt: 2999,\n    message: 19\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  server,\n  mysql,\n  postgres,\n  session,\n  dbTblName,\n  smtp\n});\n\n//# sourceURL=webpack:///./src/core/config.js?");

/***/ }),

/***/ "./src/core/consts.js":
/*!****************************!*\
  !*** ./src/core/consts.js ***!
  \****************************/
/*! exports provided: uploadPath, success, error, lang, defaultPageSize, defaultPageSize2, defaultLanguage, current, male, female, tokenLifetime, tokenStatus, auth, social, avatar, resetPasswordUri, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadPath\", function() { return uploadPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"success\", function() { return success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lang\", function() { return lang; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultPageSize\", function() { return defaultPageSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultPageSize2\", function() { return defaultPageSize2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultLanguage\", function() { return defaultLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"current\", function() { return current; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"male\", function() { return male; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"female\", function() { return female; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tokenLifetime\", function() { return tokenLifetime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tokenStatus\", function() { return tokenStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"social\", function() { return social; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"avatar\", function() { return avatar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetPasswordUri\", function() { return resetPasswordUri; });\nconst uploadPath = {\n  avatars: \"uploads/avatars\",\n  aboutUs: \"uploads/about-us\"\n};\nconst success = \"success\";\nconst error = \"error\";\nconst lang = \"lang\";\nconst defaultPageSize = 10;\nconst defaultPageSize2 = 12;\nconst defaultLanguage = \"en\";\nconst current = \"current\";\nconst male = \"M\";\nconst female = \"F\";\nconst tokenLifetime = 24;\nconst tokenStatus = {\n  VALID: 1,\n  EXPIRED: 2,\n  NOT_FOUND: 3,\n  ALREADY_USED: 4,\n  EMAIL_NOT_FOUND: 5\n};\nconst auth = {\n  SOCIAL_SIGN_UP_PASSWORD: \"\"\n};\nconst social = {\n  name: {\n    GOOGLE: \"Google\",\n    FACEBOOK: \"Facebook\"\n  }\n};\nconst avatar = {\n  DEFAULT_AVATAR: \"images/default-avatar.png\"\n};\nconst resetPasswordUri = \"auth/reset-password\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  uploadPath,\n  success,\n  error,\n  lang,\n  defaultPageSize,\n  defaultPageSize2,\n  defaultLanguage,\n  current,\n  male,\n  female,\n  tokenLifetime,\n  tokenStatus,\n  auth,\n  social,\n  resetPasswordUri\n});\n\n//# sourceURL=webpack:///./src/core/consts.js?");

/***/ }),

/***/ "./src/core/db.js":
/*!************************!*\
  !*** ./src/core/db.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysql */ \"./src/core/mysql.js\");\n/* harmony import */ var _postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postgres */ \"./src/core/postgres.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_postgres__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/core/db.js?");

/***/ }),

/***/ "./src/core/fetch.js":
/*!***************************!*\
  !*** ./src/core/fetch.js ***!
  \***************************/
/*! exports provided: GET, POST, PUT, PATCH, DELETE, cancelRequest, setHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET\", function() { return GET; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POST\", function() { return POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PUT\", function() { return PUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PATCH\", function() { return PATCH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE\", function() { return DELETE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cancelRequest\", function() { return cancelRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setHeader\", function() { return setHeader; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET = \"GET\";\nconst POST = \"POST\";\nconst PUT = \"PUT\";\nconst PATCH = \"PATCH\";\nconst DELETE = \"DELETE\";\nlet CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken;\n\nlet cancel = () => {};\n\nconst cancelRequest = () => {\n  return cancel;\n};\n\nconst getQueryString = params => {\n  if (!params) return \"\";\n  let esc = encodeURIComponent;\n  return \"?\" + Object.keys(params).map(k => esc(k) + \"=\" + esc(params[k])).join(\"&\");\n};\n\nconst getJsonBody = params => {\n  return params;\n};\n\nconst setHeader = params => {\n  Object.entries(params).forEach(([key, value]) => {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common[key] = value;\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((requestType, resourceURL, parameters, headers, config) => {\n  switch (requestType) {\n    case GET:\n      return new Promise((resolve, reject) => {\n        const queryString = getQueryString(parameters);\n        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(resourceURL + queryString, { ...config,\n          cancelToken: new CancelToken(c => {\n            cancel = c;\n          }),\n          headers: headers\n        }).then(response => {\n          resolve(response.data);\n        }).catch(error => {\n          reject(error);\n        });\n      });\n\n    case POST:\n      return new Promise((resolve, reject) => {\n        const jsonBody = getJsonBody(parameters);\n        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(resourceURL, jsonBody, { ...config,\n          cancelToken: new CancelToken(c => {\n            cancel = c;\n          }),\n          headers: headers\n        }).then(response => {\n          resolve(response.data);\n        }).catch(error => {\n          reject(error);\n        });\n      });\n\n    case PUT:\n      return new Promise((resolve, reject) => {\n        const jsonBody = getJsonBody(parameters);\n        axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(resourceURL, jsonBody, { ...config,\n          cancelToken: new CancelToken(c => {\n            cancel = c;\n          }),\n          headers: headers\n        }).then(response => {\n          resolve(response.data);\n        }).catch(error => {\n          reject(error);\n        });\n      });\n\n    case PATCH:\n      return new Promise((resolve, reject) => {\n        const jsonBody = getJsonBody(parameters);\n        axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(resourceURL, jsonBody, { ...config,\n          cancelToken: new CancelToken(c => {\n            cancel = c;\n          }),\n          headers: headers\n        }).then(response => {\n          resolve(response.data);\n        }).catch(error => {\n          reject(error);\n        });\n      });\n\n    case DELETE:\n      return new Promise((resolve, reject) => {\n        const queryString = getQueryString(parameters);\n        axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(resourceURL + queryString, { ...config,\n          cancelToken: new CancelToken(c => {\n            cancel = c;\n          }),\n          headers: headers\n        }).then(response => {\n          resolve(response.data);\n        }).catch(error => {\n          reject(error);\n        });\n      });\n\n    default:\n      break;\n  }\n});\n\n//# sourceURL=webpack:///./src/core/fetch.js?");

/***/ }),

/***/ "./src/core/helpers.js":
/*!*****************************!*\
  !*** ./src/core/helpers.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mkdirp */ \"mkdirp\");\n/* harmony import */ var mkdirp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mkdirp__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dateformat */ \"dateformat\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db */ \"./src/core/db.js\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consts */ \"./src/core/consts.js\");\n/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tracer */ \"./src/core/tracer.js\");\n\n\n\n\n\n\n\n\n\n\nconst _calculateStartPosition = (page, pageSize) => {\n  page || (page = 1);\n  pageSize || (pageSize = _consts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].defaultPageSize);\n  const start = pageSize * (page - 1);\n  return [start, pageSize];\n};\n\nconst _makeLimitClause = (page, pageSize) => {\n  if (!!page) {\n    const [start, limit] = _calculateStartPosition(page, pageSize);\n\n    return Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"LIMIT %d, %d\", start, limit);\n  }\n\n  return \"\";\n};\n\nconst _makeWhereClause = conditions => {\n  let conditionArr = [];\n  let values = [];\n  !!conditions && Object.keys(conditions).map(key => {\n    conditionArr.push(`\\`${key}\\` ${conditions[key][\"type\"]} ?`);\n    values.push(conditions[key][\"value\"]);\n  });\n  const clause = conditionArr.length ? \"WHERE \" + conditionArr.join(\" AND \") : \"\";\n  return [clause, values];\n};\n\nconst _makeUpdateClause = updates => {\n  let conditionArr = [];\n  let values = [];\n  !!updates && Object.keys(updates).map(key => {\n    conditionArr.push(`\\`${key}\\` = ?`);\n    values.push(updates[key]);\n  });\n  const clause = conditionArr.length ? \"SET \" + conditionArr.join(\", \") : \"\";\n  return [clause, values];\n};\n\nconst _makeOnDuplicateUpdateClause = values => {};\n\nconst _makeOrderClause = orders => {\n  let orderArr = [];\n  !!orders && Object.keys(orders).map(key => {\n    orderArr.push(`\\`${key}\\` ${orders[key]}`);\n  });\n  const orderClause = orderArr.length ? \"ORDER BY \" + orderArr.join(\", \") : \"\";\n  return orderClause;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  sleep: async ms => {\n    return new Promise((resolve, reject) => {\n      const handle = setTimeout(() => {\n        clearTimeout(handle);\n        resolve();\n      }, ms);\n    });\n  },\n  uploadFile: async (file, fileDir) => {\n    const fileName = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"%s%s\", uuid__WEBPACK_IMPORTED_MODULE_2___default()(), path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(file.path));\n    const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(fileDir, fileName);\n    const writable = fs__WEBPACK_IMPORTED_MODULE_3___default.a.createWriteStream(filePath);\n    return new Promise((resolve, reject) => {\n      mkdirp__WEBPACK_IMPORTED_MODULE_4___default.a.sync(fileDir, {});\n      file.on(\"end\", e => {\n        resolve(fileName);\n      });\n      file.on(\"error\", reject);\n      file.pipe(writable);\n    });\n  },\n  uploadBase64Image: async (base64, fileDir) => {\n    const base64Data = base64.replace(/^data:image\\/png;base64,/, \"\");\n    const fileName = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"%s%s\", uuid__WEBPACK_IMPORTED_MODULE_2___default()(), \".png\");\n    const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(fileDir, fileName);\n    return new Promise((resolve, reject) => {\n      mkdirp__WEBPACK_IMPORTED_MODULE_4___default.a.sync(fileDir, {});\n      fs__WEBPACK_IMPORTED_MODULE_3___default.a.writeFile(filePath, base64Data, 'base64', function (err) {\n        if (!!err) {\n          reject(err);\n        } else {\n          resolve(fileName);\n        }\n      });\n    });\n  },\n  listQuery: async ({\n    table,\n    conditions,\n    orders,\n    page,\n    pageSize\n  }) => {\n    const [whereClause, values] = _makeWhereClause(conditions);\n\n    const orderClause = _makeOrderClause(orders);\n\n    const limitClause = _makeLimitClause(page, pageSize);\n\n    const [start, limit] = _calculateStartPosition(page, pageSize);\n\n    let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` %s %s %s;\", table, whereClause, orderClause, limitClause);\n\n    try {\n      let rows = await _db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, values);\n      sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT COUNT(*) `count` FROM `%s` %s;\", table, whereClause);\n      let count = await _db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, values);\n      let pageCount = 0;\n      count.length > 0 && (pageCount = Math.ceil(count[0]['count'] / limit));\n      return {\n        count: count[0]['count'],\n        pageCount,\n        data: rows\n      };\n    } catch (err) {\n      throw err;\n    }\n  },\n  getQuery: async ({\n    table,\n    conditions,\n    orders\n  }) => {\n    const [whereClause, values] = _makeWhereClause(conditions);\n\n    const orderClause = _makeOrderClause(orders);\n\n    let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` %s %s LIMIT 1;\", table, whereClause, orderClause);\n\n    try {\n      let rows = await _db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, values);\n      return rows[0];\n    } catch (err) {\n      throw err;\n    }\n  },\n  updateQuery: async ({\n    table,\n    updates,\n    conditions\n  }) => {\n    const [updateClause, values1] = _makeUpdateClause(updates);\n\n    const [whereClause, values2] = _makeWhereClause(conditions);\n\n    let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"UPDATE `%s` %s %s;\", table, updateClause, whereClause); // let sql = sprintf(\"DELETE FROM `%s` %s %s LIMIT 1;\", table, whereClause, orderClause);\n\n    _tracer__WEBPACK_IMPORTED_MODULE_8__[\"default\"].info(sql, [...values1, ...values2]);\n\n    try {\n      let rows = await _db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [...values1, ...values2]);\n      return rows;\n    } catch (err) {\n      throw err;\n    }\n  },\n  deleteQuery: async ({\n    table,\n    conditions,\n    orders\n  }) => {\n    const [whereClause, values] = _makeWhereClause(conditions);\n\n    const orderClause = _makeOrderClause(orders);\n\n    const now = new Date();\n    const today = dateformat__WEBPACK_IMPORTED_MODULE_5___default()(now, \"yyyy-mm-dd\");\n    let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"UPDATE `%s` SET `deletedDate` = ? %s %s LIMIT 1;\", table, whereClause, orderClause); // let sql = sprintf(\"DELETE FROM `%s` %s %s LIMIT 1;\", table, whereClause, orderClause);\n\n    try {\n      let rows = await _db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [today, ...values]);\n      return rows;\n    } catch (err) {\n      throw err;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/core/helpers.js?");

/***/ }),

/***/ "./src/core/i18n/ar.js":
/*!*****************************!*\
  !*** ./src/core/i18n/ar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: \"success\",\n  error: \"danger\",\n  unknownServerError: \"خطأ غير معروف في الخادم\",\n  emailAlreadyRegistered: \"عنوان البريد الإلكترونى مستخدم سابقا.\",\n  usernameAlreadyRegistered: \"وسجلت بالفعل اسم المستخدم هذا.\",\n  // successfullyRegistered: \"Successfully registered. Please activate your account by validation email.\",\n  successfullyRegistered: \"تم التسجيل بنجاح.\",\n  emailIsIncorrect: \"البريد الالكتروني غير صحيح.\",\n  emailIsNotRegistered: \"البريد الإلكتروني غير مسجل\",\n  usernameIsIncorrect: \"اسم المستخدم غير صحيح\",\n  passwordIsIncorrect: \"كلمة المرور غير صحيحة\",\n  yourAccountIsNotAllowed: \"حسابك غير مفعل حاليا، سيتم تفعيله بعد دقائق معدودة.\",\n  yourAccountIsClosed: \"حسابك مغلق. يرجى الاتصال بدعم العملاء.\",\n  successfullySignedIn: \"تم تسجيل الدخول بنجاح\",\n  successfullySignedOut: \"تم تسجيل الخروج بنجاح\",\n  error404: \"لم يتم العثور على\",\n  error500: \"خطأ غير معروف في الخادم\",\n  successfullySaved: \"تم الحفظ بنجاح\",\n  successfullyAdded: \"أضيف بنجاح\",\n  successfullyEdited: \"تم التعديل بنجاح\",\n  successfullyChanged: \"تغيرت بنجاح\",\n  successfullyDeleted: \"تم الحذف بنجاح\",\n  successfullyReset: \"إعادة تعيين بنجاح\",\n  currentPasswordIncorrect: \"كلمة المرور الحالية غير صحيحة.\",\n  failedDueToUnknownServerError: \"فشل بسبب خطأ غير معروف في الخادم\",\n  invalidParameters: \"معلمات غير صالحة\",\n  notUploaded: \"لم يتم الرفع\",\n  notFound: \"لم يتم العثور على\",\n  noData: \"ليس هنالك معلومات\",\n  successfullyUploaded: \"تم الرفع بنجاح\",\n  successfullyPosted: \"تم النشر بنجاح\",\n  successfullyJoined: \"تم التسجيل بنجاح\",\n  youHaveAlreadyJoined: \"لقد انضممت بالفعل\",\n  successfullySent: \"أرسلت بنجاح\",\n  invalidHash: \"توقيعك غير صالح.\",\n  invalidUser: \"معلوماتك غير صالحة.\",\n  notRegistered: \"انت لم تسجل.\",\n  male: \"ذكر\",\n  female: \"انثى\",\n  passwordIsSuccessfullyChanged: \"تم تغيير كلمة السر بنجاح\",\n  forgotPassword: \"إعادة تعيين كلمة المرور(Reset Password)\",\n  resetEmailIsSent: \"تم ارسال بريد الكتروني يحتوي على تعليمات إعادة تعيين رمز المرور الخاص بك.\",\n  tokenIsValid: \"الرمز صالح\",\n  tokenIsExpired: \"انتهت صلاحية الرمز. أعد المحاولة لإعادة تعيين كلمة المرور.\",\n  tokenIsNotFound: \"الرمز غير صالح. أعد المحاولة لإعادة تعيين كلمة المرور.\",\n  tokenIsAlreadyUsed: \"Token يستخدم بالفعل. أعد المحاولة لإعادة تعيين كلمة المرور.\",\n  accountIsInvalid: \"حسابك غير صالح. حاول مع واحد آخر.\",\n  accountIsNotRegistered: \"حسابك غير مسجل. حاول مع واحد آخر.\",\n  accountIsAlreadyRegistered: \"حسابك مسجل بالفعل. حاول مع واحد آخر.\",\n  yourAccountDoesNotSupportGoogleAuth: \"حسابك لا يدعم تسجيل الدخول إلى Google. جرب طريقة أخرى.\",\n  yourAccountDoesNotSupportFacebookAuth: \"حسابك لا يدعم Facebook Login. جرب طريقة أخرى.\"\n});\n\n//# sourceURL=webpack:///./src/core/i18n/ar.js?");

/***/ }),

/***/ "./src/core/i18n/en.js":
/*!*****************************!*\
  !*** ./src/core/i18n/en.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  success: \"success\",\n  error: \"danger\",\n  unknownServerError: \"Unknown server error\",\n  emailAlreadyRegistered: \"This email is already registered.\",\n  usernameAlreadyRegistered: \"This username is already registered.\",\n  // successfullyRegistered: \"Successfully registered. Please activate your account by validation email.\",\n  successfullyRegistered: \"Successfully registered. Please try to sign in.\",\n  emailIsIncorrect: \"Email is incorrect.\",\n  emailIsNotRegistered: \"Email is not registered.\",\n  usernameIsIncorrect: \"Username is incorrect\",\n  passwordIsIncorrect: \"Password is incorrect\",\n  yourAccountIsNotAllowed: \"Your account is not allowed. Please contact Customer Support.\",\n  yourAccountIsClosed: \"Your account is closed. Please contact Customer Support.\",\n  successfullySignedIn: \"Successfully signed in\",\n  successfullySignedOut: \"Successfully signed out\",\n  error404: \"Not Fount\",\n  error500: \"Unknown server error\",\n  successfullySaved: \"Successfully saved\",\n  successfullyAdded: \"Successfully added\",\n  successfullyEdited: \"Successfully edited\",\n  successfullyChanged: \"Successfully changed\",\n  successfullyDeleted: \"Successfully Deleted\",\n  successfullyReset: \"Successfully Reset\",\n  currentPasswordIncorrect: \"Current password is incorrect.\",\n  failedDueToUnknownServerError: \"Failed due to unknown server error\",\n  invalidParameters: \"Invalid Parameters\",\n  notUploaded: \"Not uploaded\",\n  notFound: \"Not Found\",\n  noData: \"There is no data\",\n  successfullyUploaded: \"Successfully uploaded\",\n  successfullyPosted: \"Successfully posted\",\n  successfullyJoined: \"Successfully joined\",\n  youHaveAlreadyJoined: \"You have already joined.\",\n  successfullySent: \"Successfully sent\",\n  invalidHash: \"Your signature is invalid.\",\n  invalidUser: \"Your information is invalid.\",\n  notRegistered: \"You are not registered.\",\n  male: \"Male\",\n  female: \"Female\",\n  passwordIsSuccessfullyChanged: \"Password is successfully changed\",\n  forgotPassword: \"إعادة تعيين كلمة المرور(Reset Password)\",\n  resetEmailIsSent: \"An email with instructions to reset your password has been sent.\",\n  tokenIsValid: \"Token is valid\",\n  tokenIsExpired: \"Token is expired. Retry to reset the password.\",\n  tokenIsNotFound: \"Token is invalid. Retry to reset the password.\",\n  tokenIsAlreadyUsed: \"Token is already used. Retry to reset the password.\",\n  accountIsInvalid: \"Your account is invalid. Try with another one.\",\n  accountIsNotRegistered: \"Your account is not registered. Try with another one.\",\n  accountIsAlreadyRegistered: \"Your account is already registered. Try with another one.\",\n  yourAccountDoesNotSupportGoogleAuth: \"Your account does not support Google Login. Try another way.\",\n  yourAccountDoesNotSupportFacebookAuth: \"Your account does not support Facebook Login. Try another way.\"\n});\n\n//# sourceURL=webpack:///./src/core/i18n/en.js?");

/***/ }),

/***/ "./src/core/mailer.js":
/*!****************************!*\
  !*** ./src/core/mailer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var email_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! email-templates */ \"email-templates\");\n/* harmony import */ var email_templates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(email_templates__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n/* harmony import */ var core_tracer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/tracer */ \"./src/core/tracer.js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst email = new email_templates__WEBPACK_IMPORTED_MODULE_1___default.a({\n  message: {\n    from: {\n      address: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user,\n      name: core_config__WEBPACK_IMPORTED_MODULE_2__[\"server\"].name\n    }\n  },\n  transport: {\n    jsonTransport: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  sendForgotPasswordMail: params => {\n    return new Promise((resolve, reject) => {\n      email.render('../email-templates/forgot-password/html.pug', params).then(html => {\n        let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n          // service: smtp.service,\n          host: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].host,\n          port: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].port,\n          secure: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].secure,\n          auth: {\n            user: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user,\n            //generated by Mailtrap\n            pass: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].pass //generated by Mailtrap\n\n          },\n          tls: {\n            rejectUnauthorized: false\n          }\n        });\n        const mailOptions = {\n          from: Object(sprintf_js__WEBPACK_IMPORTED_MODULE_4__[\"sprintf\"])(\"%s <%s>\", 'PM', core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user),\n          to: params.email,\n          subject: params.subject,\n          html\n        };\n        transporter.sendMail(mailOptions, function (error, info) {\n          if (error) {\n            reject(error);\n          } else {\n            resolve(info);\n          }\n        });\n      }).catch(reject);\n    });\n  },\n  sendContactUsMail: params => {\n    return new Promise((resolve, reject) => {\n      email.render('../email-templates/contact-us/html.pug', params).then(html => {\n        let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n          // service: smtp.service,\n          host: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].host,\n          port: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].port,\n          secure: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].secure,\n          auth: {\n            user: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user,\n            //generated by Mailtrap\n            pass: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].pass //generated by Mailtrap\n\n          },\n          tls: {\n            rejectUnauthorized: false\n          }\n        });\n        const mailOptions = {\n          from: Object(sprintf_js__WEBPACK_IMPORTED_MODULE_4__[\"sprintf\"])(\"%s <%s>\", 'PM', core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user),\n          to: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user,\n          subject: 'اتصل بن(Contact Us)',\n          html\n        };\n        transporter.sendMail(mailOptions, function (error, info) {\n          if (error) {\n            reject(error);\n          } else {\n            resolve(info);\n          }\n        });\n      }).catch(reject);\n    });\n  },\n  sendCourseJoinMail: async (to, name, subject) => {\n    return new Promise((resolve, reject) => {\n      email.render('../email-templates/course-join/html.pug', {}).then(html => {\n        let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n          // service: smtp.service,\n          host: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].host,\n          port: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].port,\n          secure: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].secure,\n          auth: {\n            user: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user,\n            //generated by Mailtrap\n            pass: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].pass //generated by Mailtrap\n\n          },\n          tls: {\n            rejectUnauthorized: false\n          }\n        });\n        const mailOptions = {\n          from: Object(sprintf_js__WEBPACK_IMPORTED_MODULE_4__[\"sprintf\"])(\"%s <%s>\", name, core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user),\n          to: to,\n          subject: subject,\n          html: html\n        };\n        transporter.sendMail(mailOptions, function (error, info) {\n          if (error) {\n            reject(error);\n          } else {\n            resolve(info);\n          }\n        });\n      }).catch(reject);\n    });\n  },\n  sendMassMail: async (to, name, subject, message) => {\n    return new Promise((resolve, reject) => {\n      // email.render('../email_templates/email_verify/html.pug', {\n      //   name: name,\n      //   subject,\n      //   message,\n      // })\n      //   .then((html) => {\n      let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({\n        // service: smtp.service,\n        host: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].host,\n        port: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].port,\n        secure: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].secure,\n        auth: {\n          user: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user,\n          //generated by Mailtrap\n          pass: core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].pass //generated by Mailtrap\n\n        },\n        tls: {\n          rejectUnauthorized: false\n        }\n      });\n      const mailOptions = {\n        from: Object(sprintf_js__WEBPACK_IMPORTED_MODULE_4__[\"sprintf\"])(\"%s <%s>\", name, core_config__WEBPACK_IMPORTED_MODULE_2__[\"smtp\"].user),\n        to: to,\n        subject: subject,\n        text: message\n      }; // tracer.info('mailOptions', mailOptions);\n\n      transporter.sendMail(mailOptions, function (error, info) {\n        if (error) {\n          reject(error);\n        } else {\n          resolve(info);\n        }\n      }); //     })\n      //     .catch(reject);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/core/mailer.js?");

/***/ }),

/***/ "./src/core/myCrypto.js":
/*!******************************!*\
  !*** ./src/core/myCrypto.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  hmacHex: plain => {\n    const cipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac(\"sha256\", core_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].server.secret).update(plain).digest(\"hex\"); // console.log(\"signMessage\", plain, cipher);\n\n    return cipher;\n  }\n});\n\n//# sourceURL=webpack:///./src/core/myCrypto.js?");

/***/ }),

/***/ "./src/core/mysql.js":
/*!***************************!*\
  !*** ./src/core/mysql.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n\n\nconst pool = mysql2__WEBPACK_IMPORTED_MODULE_0___default.a.createPool(core_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysql);\nconst db = {};\n\ndb.query = (q, data) => {\n  return new Promise((resolve, reject) => {\n    pool.query(q, data, (err, res) => {\n      err ? reject(err) : resolve(res);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n//# sourceURL=webpack:///./src/core/mysql.js?");

/***/ }),

/***/ "./src/core/postgres.js":
/*!******************************!*\
  !*** ./src/core/postgres.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Pool\"](core_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].postgres);\n/* harmony default export */ __webpack_exports__[\"default\"] = (pool);\n\n//# sourceURL=webpack:///./src/core/postgres.js?");

/***/ }),

/***/ "./src/core/strings.js":
/*!*****************************!*\
  !*** ./src/core/strings.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/i18n/en */ \"./src/core/i18n/en.js\");\n/* harmony import */ var core_i18n_ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/i18n/ar */ \"./src/core/i18n/ar.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  en: core_i18n_en__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ar: core_i18n_ar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/core/strings.js?");

/***/ }),

/***/ "./src/core/tracer.js":
/*!****************************!*\
  !*** ./src/core/tracer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tracer */ \"tracer\");\n/* harmony import */ var tracer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tracer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tracer__WEBPACK_IMPORTED_MODULE_0___default.a.colorConsole({\n  format: [\"{{timestamp}} {{file}}:{{line}} <{{title}}> {{message}}\", {\n    error: \"{{timestamp}} {{file}}:{{line}} <{{title}}> {{message}}\\nCall Stack:\\n{{stack}}\" // error format\n\n  }],\n  dateformat: \"HH:MM:ss.L\",\n  preprocess: data => {\n    data.title = data.title.toUpperCase();\n  }\n}));\n\n//# sourceURL=webpack:///./src/core/tracer.js?");

/***/ }),

/***/ "./src/routes/api.js":
/*!***************************!*\
  !*** ./src/routes/api.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/auth */ \"./src/routes/api/auth.js\");\n/* harmony import */ var _api_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/core */ \"./src/routes/api/core.js\");\n/* harmony import */ var _api_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/account */ \"./src/routes/api/account.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use(\"/\", express_jwt__WEBPACK_IMPORTED_MODULE_1___default()({\n  secret: core_config__WEBPACK_IMPORTED_MODULE_2__[\"session\"].secret\n}).unless({\n  path: [/\\/auth\\/*/]\n}));\nrouter.use(\"/auth\", _api_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use(\"/core\", _api_core__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use(\"/account\", _api_account__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/api.js?");

/***/ }),

/***/ "./src/routes/api/account.js":
/*!***********************************!*\
  !*** ./src/routes/api/account.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dateformat */ \"dateformat\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n/* harmony import */ var core_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/db */ \"./src/core/db.js\");\n/* harmony import */ var core_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/strings */ \"./src/core/strings.js\");\n/* harmony import */ var core_tracer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/tracer */ \"./src/core/tracer.js\");\n/* harmony import */ var core_consts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/consts */ \"./src/core/consts.js\");\n/* harmony import */ var core_myCrypto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/myCrypto */ \"./src/core/myCrypto.js\");\n/* harmony import */ var core_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/helpers */ \"./src/core/helpers.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst avatarProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  const {\n    id\n  } = req.body;\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `id` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_6__[\"dbTblName\"].core.avatars);\n\n  try {\n    let rows = await core_db__WEBPACK_IMPORTED_MODULE_7__[\"default\"].query(sql, [id]);\n\n    if (!!rows.length) {\n      const row = rows[0];\n      res.status(200).send({\n        result: langs.success,\n        data: {\n          url: !!row.url.length ? row.url : core_consts__WEBPACK_IMPORTED_MODULE_10__[\"avatar\"].DEFAULT_AVATAR,\n          originUrl: !!row.originUrl.length ? row.originUrl : core_consts__WEBPACK_IMPORTED_MODULE_10__[\"avatar\"].DEFAULT_AVATAR,\n          scale: row.scale,\n          borderRadius: row.borderRadius,\n          position: {\n            x: row.xPosition,\n            y: row.yPosition\n          },\n          rotate: row.rotate\n        }\n      });\n    } else {\n      res.status(200).send({\n        result: langs.success,\n        data: {\n          url: core_consts__WEBPACK_IMPORTED_MODULE_10__[\"avatar\"].DEFAULT_AVATAR,\n          originUrl: core_consts__WEBPACK_IMPORTED_MODULE_10__[\"avatar\"].DEFAULT_AVATAR,\n          scale: 1,\n          borderRadius: 0,\n          position: {\n            x: 0.5,\n            y: 0.5\n          },\n          rotate: 0\n        }\n      });\n    }\n  } catch (err) {\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError\n    });\n  }\n};\n\nconst saveAvatarProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  const {\n    id,\n    file,\n    base64,\n    scale,\n    borderRadius,\n    xPosition,\n    yPosition,\n    rotate\n  } = req.body;\n  const today = new Date();\n  const date = dateformat__WEBPACK_IMPORTED_MODULE_3___default()(today, \"yyyy-mm-dd\"); // const time = dateformat(today, \"hh:MM TT\");\n  // const timestamp = today.getTime();\n\n  const appDir = process.cwd();\n  const fileDir = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(appDir, \"public\", core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].uploadPath.avatars);\n  let fileName = \"\";\n\n  if (!!file) {\n    fileName = await core_helpers__WEBPACK_IMPORTED_MODULE_12__[\"default\"].uploadFile(file, fileDir);\n  }\n\n  let originUrl = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"%s/%s\", core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].uploadPath.avatars, fileName);\n  let fileName2 = await core_helpers__WEBPACK_IMPORTED_MODULE_12__[\"default\"].uploadBase64Image(base64, fileDir);\n  let url = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"%s/%s\", core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].uploadPath.avatars, fileName2);\n  let sql;\n  let rows;\n  let row;\n\n  if (!!id) {\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `id` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_6__[\"dbTblName\"].core.avatars);\n    rows = await core_db__WEBPACK_IMPORTED_MODULE_7__[\"default\"].query(sql, [id]);\n\n    if (rows.length > 0) {\n      row = rows[0];\n      let oldFilename = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(fileDir, path__WEBPACK_IMPORTED_MODULE_4___default.a.basename(row[\"originUrl\"]));\n      !!file && fs__WEBPACK_IMPORTED_MODULE_5___default.a.unlink(oldFilename, e => {});\n      oldFilename = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(fileDir, path__WEBPACK_IMPORTED_MODULE_4___default.a.basename(row[\"url\"]));\n      !!fileName2.length && fs__WEBPACK_IMPORTED_MODULE_5___default.a.unlink(oldFilename, e => {});\n    }\n  }\n\n  if (!fileName2.length) {\n    url = !!row ? row.url : \"\";\n  }\n\n  if (!fileName.length) {\n    originUrl = !!row ? row.originUrl : \"\";\n  }\n\n  const newRows = [[id, url, originUrl, scale, borderRadius, xPosition, yPosition, rotate]];\n  sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `url` = VALUES(`url`), `originUrl` = VALUES(`originUrl`), `scale` = VALUES(`scale`), `borderRadius` = VALUES(`borderRadius`), `xPosition` = VALUES(`xPosition`), `yPosition` = VALUES(`yPosition`), `rotate` = VALUES(`rotate`);\", core_config__WEBPACK_IMPORTED_MODULE_6__[\"dbTblName\"].core.avatars);\n\n  try {\n    rows = await core_db__WEBPACK_IMPORTED_MODULE_7__[\"default\"].query(sql, [newRows]);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullySaved,\n      data: rows\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst changePasswordProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  let {\n    id,\n    password0,\n    password\n  } = req.body;\n  const hash0 = core_myCrypto__WEBPACK_IMPORTED_MODULE_11__[\"default\"].hmacHex(password0 || \"\");\n  const hash = core_myCrypto__WEBPACK_IMPORTED_MODULE_11__[\"default\"].hmacHex(password || \"\");\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `id` = ? AND `hash` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_6__[\"dbTblName\"].users);\n\n  try {\n    let rows = await core_db__WEBPACK_IMPORTED_MODULE_7__[\"default\"].query(sql, [id, hash0]);\n\n    if (rows.length === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.currentPasswordIncorrect\n      });\n      return;\n    }\n\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_1__[\"sprintf\"])(\"UPDATE `%s` SET `hash` = ? WHERE `id` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_6__[\"dbTblName\"].users);\n    await core_db__WEBPACK_IMPORTED_MODULE_7__[\"default\"].query(sql, [hash, id]);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.passwordIsSuccessfullyChanged\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post(\"/avatar\", avatarProc);\nrouter.post(\"/save-avatar\", saveAvatarProc);\nrouter.post(\"/change-password\", changePasswordProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/api/account.js?");

/***/ }),

/***/ "./src/routes/api/auth.js":
/*!********************************!*\
  !*** ./src/routes/api/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dateformat */ \"dateformat\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n/* harmony import */ var core_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/db */ \"./src/core/db.js\");\n/* harmony import */ var core_myCrypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/myCrypto */ \"./src/core/myCrypto.js\");\n/* harmony import */ var core_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/strings */ \"./src/core/strings.js\");\n/* harmony import */ var core_tracer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/tracer */ \"./src/core/tracer.js\");\n/* harmony import */ var core_consts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/consts */ \"./src/core/consts.js\");\n/* harmony import */ var core_mailer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/mailer */ \"./src/core/mailer.js\");\n/* harmony import */ var core_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/fetch */ \"./src/core/fetch.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst _validateToken = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  const {\n    email,\n    token\n  } = req.body;\n  const today = new Date();\n  const timestamp = today.getTime();\n\n  try {\n    let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `email` = ? AND `token` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].resetPasswordTokens);\n    let rows = await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [email, token]);\n\n    if (!rows.length) {\n      return core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].NOT_FOUND;\n    }\n\n    const row = rows[0];\n\n    if (timestamp >= row.expire) {\n      return core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].EXPIRED;\n    }\n\n    const used = core_myCrypto__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hmacHex(`${row.timestamp}${row.token}${row.expire}`);\n\n    if (used !== row.used) {\n      return core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].ALREADY_USED;\n    }\n\n    return core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].VALID;\n  } catch (err) {\n    throw err;\n  }\n};\n\nconst signInProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  const {\n    email,\n    password\n  } = req.body;\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT * FROM %s WHERE email = $1;\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].core.users);\n\n  try {\n    let result = await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [email]);\n\n    if (result.rowCount === 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailIsNotRegistered\n      });\n      return;\n    }\n\n    const {\n      rows\n    } = result;\n    const user = rows[0];\n    const isMatched = bcryptjs__WEBPACK_IMPORTED_MODULE_4___default.a.compareSync(password, user.password);\n\n    if (!isMatched) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.passwordIsIncorrect\n      });\n      return;\n    }\n\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].info(user);\n\n    if (!!user.deletedDate && user.deletedDate.deleted_at > 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.yourAccountIsClosed\n      });\n      return;\n    } // if (user.allowedDate.length === 0) {\n    //   res.status(200).send({\n    //     result: langs.error,\n    //     message: langs.yourAccountIsNotAllowed,\n    //   });\n    //   return;\n    // }\n\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      id: user[\"id\"],\n      email: user[\"email\"],\n      firstName: user[\"name\"]\n    }, core_config__WEBPACK_IMPORTED_MODULE_5__[\"session\"].secret); // const today = new Date();\n    // const date = dateformat(today, \"yyyy-mm-dd\");\n    // const time = dateformat(today, \"hh:MM TT\");\n    // const timestamp = today.getTime();\n    // const remoteAddress = req.header[\"x-forwarded-for\"] || req.connection.remoteAddress;\n    // const newRows = [\n    //   [null, user.id, timestamp, date, time, remoteAddress]\n    // ];\n    // sql = sprintf(\"INSERT INTO %s VALUES S1;\", dbTblName.core.signInHistory);\n    // await db.query(sql, [newRows]);\n\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullySignedIn,\n      data: {\n        user: { ...user\n        },\n        token\n      }\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(err);\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst signUpProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  const {\n    social,\n    socialId,\n    email,\n    password,\n    username,\n    firstName,\n    fatherName,\n    lastName,\n    countryCode,\n    phone\n  } = req.body;\n  const hash = core_myCrypto__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hmacHex(!!social ? core_consts__WEBPACK_IMPORTED_MODULE_10__[\"auth\"].SOCIAL_SIGN_UP_PASSWORD : password);\n  const today = new Date();\n  const date = dateformat__WEBPACK_IMPORTED_MODULE_3___default()(today, \"yyyy-mm-dd\");\n  const timestamp = today.toISOString();\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT `email` FROM `%s` WHERE `email` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].users);\n\n  try {\n    let rows = await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [email]);\n\n    if (rows.length > 0) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailAlreadyRegistered\n      });\n      return;\n    }\n\n    const newRows = [[null, social || \"\", socialId || \"\", email || \"\", hash, username, firstName, fatherName, lastName, countryCode, phone, \"\", \"\", date, date, \"\", \"\"]];\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ?;\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].users);\n    await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [newRows]); // sendVerificationEmail(email);\n\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullyRegistered\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst sendForgotPasswordMailProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  const {\n    email\n  } = req.body;\n  let today = new Date();\n  const timestamp = today.getTime();\n  today = new Date(timestamp + core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].tokenLifetime * 3600 * 1000);\n  const expire = today.getTime();\n  const token = core_myCrypto__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hmacHex(`${email}${timestamp}`);\n  const used = core_myCrypto__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hmacHex(`${timestamp}${token}${expire}`);\n  let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"SELECT * FROM `%s` WHERE `email` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].users);\n\n  try {\n    let rows = await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [email]);\n\n    if (!rows.length) {\n      res.status(200).send({\n        result: langs.error,\n        message: langs.emailIsNotRegistered\n      });\n      return;\n    }\n\n    const user = rows[0];\n    const name = `${user.firstName} ${user.lastName}`;\n    const url = `${core_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].server.baseUrl}${core_consts__WEBPACK_IMPORTED_MODULE_10__[\"resetPasswordUri\"]}/${email}/${token}`;\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].info(token);\n    await core_mailer__WEBPACK_IMPORTED_MODULE_11__[\"default\"].sendForgotPasswordMail({\n      email,\n      name,\n      url,\n      subject: langs.forgotPassword\n    });\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"INSERT INTO `%s` VALUES ? ON DUPLICATE KEY UPDATE `timestamp` = VALUES(`timestamp`), `token` = VALUES(`token`), `expire` = VALUES(`expire`), `used` = VALUES(`used`);\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].resetPasswordTokens);\n    const newRows = [[email, timestamp, token, expire, used]];\n    await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [newRows]);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.resetEmailIsSent\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst validateTokenProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n\n  try {\n    const result = await _validateToken(req, res, next);\n\n    switch (result) {\n      case core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].VALID:\n        res.status(200).send({\n          result: langs.success,\n          message: langs.tokenIsValid\n        });\n        break;\n\n      case core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].EXPIRED:\n        res.status(200).send({\n          result: langs.error,\n          message: langs.tokenIsExpired\n        });\n        break;\n\n      case core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].NOT_FOUND:\n        res.status(200).send({\n          result: langs.error,\n          message: langs.tokenIsNotFound\n        });\n        break;\n\n      case core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].ALREADY_USED:\n        res.status(200).send({\n          result: langs.error,\n          message: langs.tokenIsAlreadyUsed\n        });\n        break;\n    }\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst resetPasswordProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_10__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_8__[\"default\"][lang];\n  const {\n    email,\n    password\n  } = req.body;\n\n  try {\n    const result = await _validateToken(req, res, next);\n\n    switch (result) {\n      case core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].EXPIRED:\n        res.status(200).send({\n          result: langs.error,\n          message: langs.tokenIsExpired\n        });\n        return;\n\n      case core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].NOT_FOUND:\n        res.status(200).send({\n          result: langs.error,\n          message: langs.tokenIsNotFound\n        });\n        return;\n\n      case core_consts__WEBPACK_IMPORTED_MODULE_10__[\"tokenStatus\"].ALREADY_USED:\n        res.status(200).send({\n          result: langs.error,\n          message: langs.tokenIsAlreadyUsed\n        });\n        return;\n    }\n\n    const hash = core_myCrypto__WEBPACK_IMPORTED_MODULE_7__[\"default\"].hmacHex(password);\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].info(password, hash);\n    let sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"UPDATE `%s` SET `used` = ? WHERE `email` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].resetPasswordTokens);\n    await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [1, email]);\n    sql = Object(sprintf_js__WEBPACK_IMPORTED_MODULE_2__[\"sprintf\"])(\"UPDATE `%s` SET `hash` = ? WHERE `email` = ?;\", core_config__WEBPACK_IMPORTED_MODULE_5__[\"dbTblName\"].users);\n    await core_db__WEBPACK_IMPORTED_MODULE_6__[\"default\"].query(sql, [hash, email]);\n    res.status(200).send({\n      result: langs.success,\n      message: langs.successfullyChanged\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_9__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post(\"/sign-in\", signInProc);\nrouter.post(\"/sign-up\", signUpProc);\nrouter.post(\"/send-forgot-password-mail\", sendForgotPasswordMailProc);\nrouter.post(\"/validate-token\", validateTokenProc);\nrouter.post(\"/reset-password\", resetPasswordProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/api/auth.js?");

/***/ }),

/***/ "./src/routes/api/core.js":
/*!********************************!*\
  !*** ./src/routes/api/core.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/config */ \"./src/core/config.js\");\n/* harmony import */ var core_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/strings */ \"./src/core/strings.js\");\n/* harmony import */ var core_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/tracer */ \"./src/core/tracer.js\");\n/* harmony import */ var core_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/consts */ \"./src/core/consts.js\");\n/* harmony import */ var core_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/helpers */ \"./src/core/helpers.js\");\n/* harmony import */ var core_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/db */ \"./src/core/db.js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sprintf-js */ \"sprintf-js\");\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nconst getJobRolesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.jobRoles,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getJobSubrolesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  const {\n    jobRoleId\n  } = req.body;\n\n  try {\n    let conditions = {\n      jobRoleId: {\n        type: \"=\",\n        value: jobRoleId\n      }\n    };\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.jobSubroles,\n      conditions,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getSectorsProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.sectors,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getIndustriesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  const {\n    sectorId\n  } = req.body;\n\n  try {\n    let conditions = {\n      sectorId: {\n        type: \"=\",\n        value: sectorId\n      }\n    };\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.industries,\n      conditions,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getCountriesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.countries,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getCitiesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  const {\n    countryId\n  } = req.body;\n\n  try {\n    let conditions = {\n      countryId: {\n        type: \"=\",\n        value: countryId\n      }\n    };\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.cities,\n      conditions,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getEmploymentTypesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.employmentTypes,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getSalaryRangesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n  let orders = {\n    minSalary: \"ASC\"\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.salaryRanges,\n      orders,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getCareerLevelsProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n  let orders = {\n    level: \"ASC\"\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.careerLevels,\n      orders,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getMajorsProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n  let orders = {\n    min: \"ASC\"\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.majors,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst getDegreesProc = async (req, res, next) => {\n  const lang = req.get(core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].lang) || core_consts__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaultLanguage;\n  const langs = core_strings__WEBPACK_IMPORTED_MODULE_4__[\"default\"][lang];\n  let conditions = {\n    deletedDate: {\n      type: \"=\",\n      value: ''\n    }\n  };\n  let orders = {\n    level: \"ASC\"\n  };\n\n  try {\n    const data = await core_helpers__WEBPACK_IMPORTED_MODULE_7__[\"default\"].listQuery({\n      table: core_config__WEBPACK_IMPORTED_MODULE_3__[\"dbTblName\"].core.degrees,\n      orders,\n      pageSize: 500\n    });\n    res.status(200).send({\n      result: langs.success,\n      ...data\n    });\n  } catch (err) {\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(JSON.stringify(err));\n    core_tracer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(__filename);\n    res.status(200).send({\n      result: langs.error,\n      message: langs.unknownServerError,\n      err\n    });\n  }\n};\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post(\"/get-job-roles\", getJobRolesProc);\nrouter.post(\"/get-job-subroles\", getJobSubrolesProc);\nrouter.post(\"/get-sectors\", getSectorsProc);\nrouter.post(\"/get-industries\", getIndustriesProc);\nrouter.post(\"/get-countries\", getCountriesProc);\nrouter.post(\"/get-cities\", getCitiesProc);\nrouter.post(\"/get-employment-types\", getEmploymentTypesProc);\nrouter.post(\"/get-salary-ranges\", getSalaryRangesProc);\nrouter.post(\"/get-career-levels\", getCareerLevelsProc);\nrouter.post(\"/get-majors\", getMajorsProc);\nrouter.post(\"/get-degrees\", getDegreesProc);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/api/core.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cluster\");\n\n//# sourceURL=webpack:///external_%22cluster%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dateformat\");\n\n//# sourceURL=webpack:///external_%22dateformat%22?");

/***/ }),

/***/ "ddos":
/*!***********************!*\
  !*** external "ddos" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ddos\");\n\n//# sourceURL=webpack:///external_%22ddos%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "email-templates":
/*!**********************************!*\
  !*** external "email-templates" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"email-templates\");\n\n//# sourceURL=webpack:///external_%22email-templates%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-form-data":
/*!************************************!*\
  !*** external "express-form-data" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-form-data\");\n\n//# sourceURL=webpack:///external_%22express-form-data%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mkdirp":
/*!*************************!*\
  !*** external "mkdirp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mkdirp\");\n\n//# sourceURL=webpack:///external_%22mkdirp%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql2\");\n\n//# sourceURL=webpack:///external_%22mysql2%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "sprintf-js":
/*!*****************************!*\
  !*** external "sprintf-js" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sprintf-js\");\n\n//# sourceURL=webpack:///external_%22sprintf-js%22?");

/***/ }),

/***/ "tracer":
/*!*************************!*\
  !*** external "tracer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tracer\");\n\n//# sourceURL=webpack:///external_%22tracer%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });