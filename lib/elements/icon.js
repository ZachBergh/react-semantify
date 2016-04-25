'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateArray = ['disabled', 'loading'];
var defaultClassName = 'icon';

var Basic = function Basic(props) {
  return _react2.default.createElement('i', props);
};

var Icon = new _filter2.default(Basic).colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent();

exports.default = Icon;