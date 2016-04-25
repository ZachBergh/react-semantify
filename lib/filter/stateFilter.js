'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (stateArray, ComposeComponent) {
  var HigherOrderComponent = function (_React$Component) {
    _inherits(HigherOrderComponent, _React$Component);

    function HigherOrderComponent() {
      _classCallCheck(this, HigherOrderComponent);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(HigherOrderComponent).apply(this, arguments));
    }

    _createClass(HigherOrderComponent, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var className = _props.className;
        var children = _props.children;

        var other = _objectWithoutProperties(_props, ['className', 'children']);

        stateArray.forEach(function (key) {
          if (key in other) {

            if (other[key]) {
              if (key in keyMap) {
                className += ' ' + keyMap[key];
              } else {
                className += ' ' + key;
              }
            }

            delete other[key];
          }
        });

        return _react2.default.createElement(
          ComposeComponent,
          _extends({ className: className }, other),
          children
        );
      }
    }]);

    return HigherOrderComponent;
  }(_react2.default.Component);

  var propTypes = {};

  stateArray.forEach(function (key) {
    return propTypes[key] = _react2.default.PropTypes.bool;
  });

  HigherOrderComponent.propTypes = propTypes;

  return HigherOrderComponent;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keyMap = {
  'readOnly': 'read-only'
};