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

var defaultClassName = 'ui popup';

var Basic = _react2.default.createClass({
  displayName: 'Basic',


  render: function render() {
    var _props = this.props;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ['children']);

    return _react2.default.createElement(
      'div',
      other,
      children
    );
  }
});

var Popup = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent();

exports.default = Popup;