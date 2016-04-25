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

var defaultClassName = 'ui rating';

var Basic = _react2.default.createClass({
  displayName: 'Basic',


  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var rating = _props.rating;
    var maxRating = _props.maxRating;

    var other = _objectWithoutProperties(_props, ['children', 'rating', 'maxRating']);

    return _react2.default.createElement(
      'div',
      _extends({}, other, {
        'data-rating': rating,
        'data-max-rating': maxRating,
        ref: 'rating' }),
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
      $(this.refs.rating).rating();
    } else {
      $(this.refs.rating).rating(init);
    }
  }
});

var Rating = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent();

exports.default = Rating;