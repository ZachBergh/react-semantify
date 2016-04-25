'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var stateArray = ['loading', 'focus', 'error'];
var defaultClassName = 'ui input';

var Basic = _react2.default.createClass({
  displayName: 'Basic',


  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var placeholder = _props.placeholder;
    var type = _props.type;

    var other = _objectWithoutProperties(_props, ['children', 'placeholder', 'type']);

    if (typeof children != 'undefined') {
      return _react2.default.createElement(
        'div',
        other,
        children
      );
    } else {
      return _react2.default.createElement(
        'div',
        other,
        _react2.default.createElement('input', {
          placeholder: placeholder,
          type: type })
      );
    }
  }
});

var Input = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent();

exports.default = Input;