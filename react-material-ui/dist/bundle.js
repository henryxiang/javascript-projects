webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(42);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactTapEventPlugin = __webpack_require__(188);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _MuiThemeProvider = __webpack_require__(194);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _materialUiApp = __webpack_require__(339);

	var _materialUiApp2 = _interopRequireDefault(_materialUiApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactTapEventPlugin2.default)();
	// import css from './css/styles.mcss'


	var index = _react2.default.createElement(
	  _MuiThemeProvider2.default,
	  null,
	  _react2.default.createElement(_materialUiApp2.default, null)
	);

	// console.debug("CSS => \n", css)

	_reactDom2.default.render(index, document.getElementById('app'));

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(18);
	var defaultClickRejectionStrategy = __webpack_require__(189);

	var alreadyInjected = false;

	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }

	  alreadyInjected = true;

	  __webpack_require__(52).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(190)(shouldRejectClick)
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 189:
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(191);
	var EventPluginUtils = __webpack_require__(54);
	var EventPropagators = __webpack_require__(51);
	var SyntheticUIEvent = __webpack_require__(85);
	var TouchEventUtils = __webpack_require__(192);
	var ViewportMetrics = __webpack_require__(86);

	var keyOf = __webpack_require__(193);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    'topTouchCancel',
	    'topTouchEnd',
	    'topTouchStart',
	    'topTouchMove'
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  'topTouchStart',
	  'topTouchCancel',
	  'topTouchEnd',
	  'topTouchMove',
	];

	var dependencies = [
	  'topMouseDown',
	  'topMouseMove',
	  'topMouseUp',
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	function createTapEventPlugin(shouldRejectClick) {
	  return {

	    tapMoveThreshold: tapMoveThreshold,

	    ignoreMouseThreshold: ignoreMouseThreshold,

	    eventTypes: eventTypes,

	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {

	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }

	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }

	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }

	  };
	}

	module.exports = createTapEventPlugin;


/***/ },

/***/ 192:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ },

/***/ 193:
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _RaisedButton = __webpack_require__(340);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _DatePicker = __webpack_require__(376);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	var _TimePicker = __webpack_require__(431);

	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	var _TextField = __webpack_require__(425);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _FontIcon = __webpack_require__(397);

	var _FontIcon2 = _interopRequireDefault(_FontIcon);

	var _IconButton = __webpack_require__(395);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _Snackbar = __webpack_require__(448);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _colors = __webpack_require__(296);

	__webpack_require__(453);

	var _styles = __webpack_require__(455);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var iconStyles = {
	  marginLeft: 20,
	  cursor: 'pointer'
	};

	var TestApp = function (_React$Component) {
	  _inherits(TestApp, _React$Component);

	  function TestApp() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TestApp);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestApp.__proto__ || Object.getPrototypeOf(TestApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      message: '',
	      open: false,
	      autoHideDuration: 4000
	    }, _this.handleClick = function (name) {
	      _this.setState({
	        message: 'You clicked \'' + name + '\'',
	        open: true
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TestApp, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: _styles2.default.myBox + ' box' },
	        _react2.default.createElement(
	          'div',
	          { className: _styles2.default.myBox },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Material UI React Components Demo'
	          )
	        ),
	        _react2.default.createElement(_RaisedButton2.default, { label: 'Click Me', onClick: function onClick() {
	            return _this2.handleClick("Button");
	          } }),
	        _react2.default.createElement(_DatePicker2.default, { hintText: 'Choose a date' }),
	        _react2.default.createElement(_TimePicker2.default, { hintText: 'Pick a time' }),
	        _react2.default.createElement(_TextField2.default, { hintText: 'Input Text' }),
	        _react2.default.createElement(_FontIcon2.default, { className: 'fa fa-address-book', style: iconStyles,
	          color: _colors.blue500,
	          hoverColor: _colors.greenA200,
	          onClick: function onClick() {
	            return _this2.handleClick("Icon");
	          } }),
	        _react2.default.createElement(_Snackbar2.default, { open: this.state.open,
	          message: this.state.message,
	          autoHideDuration: this.state.autoHideDuration })
	      );
	    }
	  }]);

	  return TestApp;
	}(_react2.default.Component);

	exports.default = TestApp;

/***/ },

/***/ 453:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 455:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"my-box":"styles_my-box_1V9fi","myBox":"styles_my-box_1V9fi","side-bar":"styles_side-bar_3q_s6","sideBar":"styles_side-bar_3q_s6","item":"styles_item_10oFi"};

/***/ }

});