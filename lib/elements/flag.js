'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultClassName = 'flag';

var Basic = function Basic(props) {
  return _react2.default.createElement('i', props);
};

var Flag = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent();

exports.default = Flag;