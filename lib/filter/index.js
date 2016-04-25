'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classGenerator2 = require('./classGenerator');

var _classGenerator3 = _interopRequireDefault(_classGenerator2);

var _colorFilter2 = require('./colorFilter');

var _colorFilter3 = _interopRequireDefault(_colorFilter2);

var _stateFilter2 = require('./stateFilter');

var _stateFilter3 = _interopRequireDefault(_stateFilter2);

var _typeFilter2 = require('./typeFilter');

var _typeFilter3 = _interopRequireDefault(_typeFilter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterFactory = function () {
  function FilterFactory(ComposeComponent) {
    _classCallCheck(this, FilterFactory);

    this.ComposeComponent = ComposeComponent;
  }

  _createClass(FilterFactory, [{
    key: 'classGenerator',
    value: function classGenerator(defaultClassName) {
      this.ComposeComponent = (0, _classGenerator3.default)(defaultClassName, this.ComposeComponent);
      return this;
    }
  }, {
    key: 'colorFilter',
    value: function colorFilter() {
      this.ComposeComponent = (0, _colorFilter3.default)(this.ComposeComponent);
      return this;
    }
  }, {
    key: 'stateFilter',
    value: function stateFilter(stateArray) {
      this.ComposeComponent = (0, _stateFilter3.default)(stateArray, this.ComposeComponent);
      return this;
    }
  }, {
    key: 'typeFilter',
    value: function typeFilter() {
      this.ComposeComponent = (0, _typeFilter3.default)(this.ComposeComponent);
      return this;
    }
  }, {
    key: 'getComposeComponent',
    value: function getComposeComponent() {
      return this.ComposeComponent;
    }
  }]);

  return FilterFactory;
}();

exports.default = FilterFactory;