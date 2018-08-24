'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseTwo = exports.promiseOne = undefined;

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promiseOne = exports.promiseOne = function promiseOne() {
  return _server2.default.get('/sysm/acl/selectAll.json');
};
var promiseTwo = exports.promiseTwo = function promiseTwo() {
  return _server2.default.get('/sysm/users/selectAll.json');
};
//# sourceMappingURL=getDatas.js.map