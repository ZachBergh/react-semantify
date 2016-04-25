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

var stateArray = ['active'];
var defaultClassName = 'ui modal';

var Basic = _react2.default.createClass({
  displayName: 'Basic',


  getInitialState: function getInitialState() {
    return {
      children: {}
    };
  },

  render: function render() {
    var other = _objectWithoutProperties(this.props, []);

    return _react2.default.createElement(
      'div',
      _extends({}, other, { ref: 'modal' }),
      this.state.children
    );
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({ children: nextProps.children });
  },

  componentDidMount: function componentDidMount() {
    var _props$init = this.props.init;
    var init = _props$init === undefined ? false : _props$init;

    if (init === false) {
      return;
    }

    if (init === true) {
      $(this.refs.modal).modal();
    } else {
      $(this.refs.modal).modal(init);
    }
  }
});

var Modal = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent();

exports.default = Modal;