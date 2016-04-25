'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Unit = function (_React$Component) {
  _inherits(Unit, _React$Component);

  function Unit() {
    _classCallCheck(this, Unit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Unit).apply(this, arguments));
  }

  _createClass(Unit, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var _props$type = _props.type;
      var type = _props$type === undefined ? 'div' : _props$type;

      var other = _objectWithoutProperties(_props, ['children', 'type']);

      switch (type) {

        case 'link':
          return _react2.default.createElement(
            'a',
            other,
            children
          );

        case 'icon':
          return _react2.default.createElement('i', other);

        case 'img':
          return _react2.default.createElement('img', other);

        case 'div':
        default:
          return _react2.default.createElement(
            'div',
            other,
            children
          );
      }
    }
  }]);

  return Unit;
}(_react2.default.Component);

exports.default = Unit;