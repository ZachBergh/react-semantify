'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultClassName = 'ui items';

var Basic = _react2.default.createClass({
  displayName: 'Basic',


  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var _props$type = _props.type;
    var type = _props$type === undefined ? '' : _props$type;

    var other = _objectWithoutProperties(_props, ['className', 'children', 'type']);

    if (type === 'link') {
      className += ' link';
    }

    return _react2.default.createElement(
      'div',
      _extends({}, other, { className: className }),
      children
    );
  }
});

var Items = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent();

exports.default = Items;