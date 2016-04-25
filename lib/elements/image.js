'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateArray = ['disabled'];
var defaultClassName = 'ui image';

var Basic = function Basic(props) {
  return _react2.default.createElement('img', props);
};

var Image = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent();

exports.default = Image;