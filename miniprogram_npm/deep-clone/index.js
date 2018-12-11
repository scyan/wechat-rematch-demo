module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1544513503416, function(require, module, exports) {
module.exports = require('./lib').default

}, function(modId) {var map = {"./lib":1544513503417}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1544513503417, function(require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepClone;
exports.formatKeys = formatKeys;
function deepClone(obj, format) {
  var refs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Map();

  var cloned = refs.get(obj);
  if (cloned) return cloned;
  if (Array.isArray(obj)) {
    var _clone = [];
    refs.set(obj, _clone);
    for (var i = 0; i < obj.length; i++) {
      _clone[i] = deepClone(obj[i], format, refs);
    }
    return _clone;
  }
  if (obj instanceof Date) return new Date(obj.valueOf());
  if (!(obj instanceof Object)) return obj;
  var clone = {};
  refs.set(obj, clone);
  var keys = Object.keys(obj);
  for (var _i = 0; _i < keys.length; _i++) {
    var key = format ? format(keys[_i]) : keys[_i];
    clone[key] = deepClone(obj[keys[_i]], format, refs);
  }
  return clone;
}

function formatKeys(format) {
  return function (obj) {
    return deepClone(obj, format);
  };
}

deepClone.formatKeys = formatKeys;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1544513503416);
})()
//# sourceMappingURL=index.js.map