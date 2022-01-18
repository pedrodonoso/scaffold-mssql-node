"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config"));

require("./database/connection");

// TESTING
// END TESTING
_app["default"].listen(_config["default"].port);

console.log('server on port', _config["default"].port);