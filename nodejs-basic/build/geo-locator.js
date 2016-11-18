'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoLocator = function () {
  function GeoLocator(api) {
    _classCallCheck(this, GeoLocator);

    this.api = api || 'https://freegeoip.net/json/';
  }

  _createClass(GeoLocator, [{
    key: 'getMyLocation',
    value: function getMyLocation() {
      return (0, _nodeFetch2.default)(this.api); //return a Promise object
    }
  }, {
    key: 'getLocationFromIp',
    value: function getLocationFromIp(ip) {
      return (0, _nodeFetch2.default)(this.api + ip); //return a Promise object
    }
  }, {
    key: 'showData',
    value: function showData(data) {
      var ip = data.ip,
          city = data.city,
          region_name = data.region_name,
          country_name = data.country_name,
          latitude = data.latitude,
          longitude = data.longitude;

      console.log("Device Current Location");
      console.log("=======================");
      console.log('IP Address: ' + ip);
      console.log('Location:   ' + city + ', ' + region_name + ', ' + country_name);
      console.log('Coordinate: ' + latitude + ', ' + longitude + '\n');
    }
  }]);

  return GeoLocator;
}();

exports.default = GeoLocator;