'use strict';

var _locator = require('./locator');

var _locator2 = _interopRequireDefault(_locator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locator = new _locator2.default();

locator.getMyLocation().then(function (response) {
    return response.json();
}).then(function (json) {
    locator.showData(json);
});