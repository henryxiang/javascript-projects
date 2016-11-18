'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Locator = function () {
  function Locator(api) {
    _classCallCheck(this, Locator);

    if (api) {
      this.api = api;
    } else {
      this.api = 'https://freegeoip.net/json/';
    }
  }

  _createClass(Locator, [{
    key: 'getMyLocation',
    value: function getMyLocation() {
      return (0, _nodeFetch2.default)(this.api);
    }
  }, {
    key: 'getLocationFromIp',
    value: function getLocationFromIp(ip) {
      return (0, _nodeFetch2.default)(this.api + ip);
    }
  }, {
    key: 'showData',
    value: function showData(data) {
      console.log('IP Address: ' + data.ip);
      console.log('Location:   ' + data.city + ', ' + data.region_name + ' ' + data.zip_code + ', ' + data.country_name);
      console.log('Coordinate: ' + data.latitude + ', ' + data.longitude);
    }
  }]);

  return Locator;
}();

exports.default = Locator;