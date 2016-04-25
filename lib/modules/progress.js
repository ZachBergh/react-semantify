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

var stateArray = ['active', 'success', 'warning', 'error', 'disabled'];
var defaultClassName = 'ui progress';

var Basic = _react2.default.createClass({
  displayName: 'Basic',


  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var percent = _props.percent;
    var value = _props.value;
    var total = _props.total;

    var other = _objectWithoutProperties(_props, ['children', 'percent', 'value', 'total']);

    return _react2.default.createElement(
      'div',
      _extends({}, other, {
        'data-percent': percent,
        'data-value': value,
        'data-total': total,
        ref: 'progress' }),
      children
    );
  },

  componentDidMount: function componentDidMount() {
    var _props$init = this.props.init;
    var init = _props$init === undefined ? false : _props$init;


    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.progress).progress();
    } else {
      $(this.refs.progress).progress(init);
    }
  }
});

var Progress = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent();

exports.default = Progress;