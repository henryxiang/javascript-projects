'use strict';

var _geoLocator = require('./geo-locator');

var _geoLocator2 = _interopRequireDefault(_geoLocator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locator = new _geoLocator2.default();

locator.getMyLocation().then(function (response) {
  return response.json();
}).then(function (json) {
  return locator.showData(json);
});