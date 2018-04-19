function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

import './input.css';

import TextField from 'material-ui/TextField';

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onBlur = function (e) {
      var val = e.target.value;
      if (_this.props.required && val.length < 1) {
        _this.setState(function (prevState, props) {
          return {
            errorClass: 'hasError',
            errorMessage: 'This field is required',
            requiredError: true
          };
        });
      } else {
        if (!_this.props.error) _this.setState(function (prevState, props) {
          return {
            errorClass: '',
            errorMessage: '',
            requiredError: false
          };
        });
      }
      if (_this.props.type === 'number') {
        var value = parseInt(val, 10);
        if (value < 1) {
          _this.setState(function (prevState, props) {
            return {
              errorClass: 'hasError',
              errorMessage: 'Must greater than zero'
            };
          });
        } else {
          _this.setState(function (prevState, props) {
            return {
              errorClass: '',
              errorMessage: ''
            };
          });
        }
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(val);
      }
    };

    _this.onChange = function (e) {
      var val = e.target.value;
      _this.setState(function (prevState, props) {
        return {
          value: val
        };
      });
      if (_this.props.onChange) {
        _this.props.onChange(val);
      }
    };

    _this.keyPress = function (e) {
      if (e.charCode == 13) {
        if (_this.props.onEnter) {
          _this.props.onEnter();
        }
      }
    };

    _this.id = props.id || '_' + _this.props.label.toLowerCase().replace(/ /g, '');

    _this.state = {
      value: props.value || '',
      errorClass: '',
      errorMessage: '',
      requiredError: false
    };

    _this.linkStyle = {
      maxWidth: props.maxWidth || "100%"
    };
    return _this;
  }

  Input.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.error) {
      this.setState(function (prevState, props) {
        return {
          errorClass: 'hasError',
          errorMessage: _this2.props.error
        };
      });
    } else {
      this.setState(function (prevState, props) {
        return {
          errorClass: '',
          errorMessage: ''
        };
      });
    }
  };

  Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    if (nextProps.error || this.state.requiredError) {
      this.setState(function (prevState, props) {
        return {
          errorClass: 'hasError',
          errorMessage: _this3.props.error
        };
      });
      if (this.state.requiredError) {
        errorMessage: 'This field is required';
      }
    } else {
      this.setState(function (prevState, props) {
        var _ref;

        return _ref = {
          errorClass: '',
          errorMessage: ''
        }, _ref['errorMessage'] = false, _ref;
      });
    }
    if (nextProps.value) {
      this.setState(function (prevState, props) {
        return {
          value: nextProps.value
        };
      });
    }
  };

  Input.prototype.render = function render() {

    var styles = {
      hintStyle: {
        color: '#999'
      },
      inputStyle: {
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
        color: '#313131'
      }
    };

    return React.createElement(
      'div',
      null,
      React.createElement(TextField, {
        margin: 'normal',
        label: this.props.label,
        type: this.props.type || "text",
        inputStyle: styles.inputStyle,
        value: this.state.value,
        floatingLabelText: this.props.label,
        onBlur: this.onBlur,
        onChange: this.onChange,
        fullWidth: true,
        floatingLabelStyle: styles.hintStyle,
        multiLine: this.props.multiLine || false,
        rows: this.props.rows || 1,
        error: this.state.errorMessage || false,
        errorText: this.state.errorMessage,
        required: this.props.required || false,
        disabled: this.props.disabled || false,
        maxLength: this.props.maxlength || "",
        inputProps: {
          maxLength: this.props.maxlength || ""
        },
        width: this.props.width || "",
        pattern: this.props.pattern || null,
        ref: this.props.inputRef || this.id,
        placeholder: '',
        onKeyPress: this.keyPress
      })
    );
  };

  return Input;
}(React.Component);

export default Input;