import React from 'react'

import './input.css'

import TextField from 'material-ui/TextField'
import Help from '@react-ag-components/help'

class Input extends React.Component {

  constructor(props) {
      super(props)

      this.id = props.id || '_' + this.props.label.toLowerCase().replace(/ /g,'')

      this.state = {
        value:props.value || '',
        errorClass: '',
        errorMessage: '',
        requiredError:false
      }

      this.linkStyle = {
        maxWidth: props.maxWidth || "100%"
      };
  }

  componentDidMount() {
    if(this.props.error){
      this.setState((prevState, props) => ({
        errorClass: 'hasError',
        errorMessage: this.props.error
      }))
    } else {
      this.setState((prevState, props) => ({
        errorClass: '',
        errorMessage: ''
      }))
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
    if(nextProps.error || this.state.requiredError){
      this.setState((prevState, props) => ({
        errorClass: 'hasError',
        errorMessage: this.props.error
      }))
      if(this.state.requiredError){
        errorMessage: 'This field is required'
      }
    } else {
      this.setState((prevState, props) => ({
        errorClass: '',
        errorMessage: '',
        errorMessage: false
      }))
    }
    if(nextProps.value){
      this.setState((prevState, props) => ({
        value: nextProps.value
      }))
    }
  }

  onBlur = (e) => {
    let val = e.target.value
    if(this.props.required && val.length < 1){
      this.setState((prevState, props) => ({
        errorClass: 'hasError',
        errorMessage: 'This field is required',
        requiredError:true
      }))
    } else {
      if(!this.props.error)
      this.setState((prevState, props) => ({
        errorClass: '',
        errorMessage: '',
        requiredError:false
      }))
    }
    if(this.props.type === 'number'){
      let value = parseInt(val, 10)
      if(value < 1){
        this.setState((prevState, props) => ({
          errorClass: 'hasError',
          errorMessage: 'Must be greater than zero'
        }))
      } else {
        this.setState((prevState, props) => ({
          errorClass: '',
          errorMessage: ''
        }))
      }
    }
    if(this.props.onBlur){
      this.props.onBlur(val);
    }
  }

  onChange = (e) => {
    let value = e.target.value

    if(this.props.type === "tel" || this.props.type === "number"){
      // only action if it's a number
      if(!isNaN(value)){
        this.updateValue(value)
      }
    } else {
      this.updateValue(value)
    }
  }

  updateValue = (value) => {
    this.setState({value})

    if(this.props.onChange){
      this.props.onChange(value);
    }
  }

  keyPress = (e) => {
    if(e.charCode == 13){
      if(this.props.onEnter){
        this.props.onEnter()
      }
    }
  }

  render() {

    const styles = {
      hintStyle: {
        color: '#999',
      },
      inputStyle: {
        fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
        color:'#313131'
      }
    }

    let inputContainerStyle = {}
    let helpContainerStyle = {
      display:'none'
    }
    let className= ''

    if(this.props.helpText){
      className = 'input-with-help'
      inputContainerStyle = {
        width: '90%'
      }

      helpContainerStyle = {
        marginTop: '40px'
      }

    }

    return (
      <div className={className}>
          <TextField
            margin="normal"
            label={this.props.label}
            type={this.props.type || "text"}
            inputStyle={styles.inputStyle}
            value={this.state.value}
            floatingLabelText={this.props.label}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onFocus={this.props.onFocu}
            onClick={this.props.onClick}
            fullWidth={true}
            floatingLabelStyle={styles.hintStyle}
            multiLine={this.props.multiLine || false}
            rows={this.props.rows || 1}
            error={this.state.errorMessage || false}
            errorText={this.state.errorMessage}
            required={this.props.required || false}
            disabled={this.props.disabled || false}
            maxLength={this.props.maxlength || ""}
            inputProps={{
              maxLength: this.props.maxlength || "",
            }}
            className={this.props.className || ""}
            width={this.props.width || ""}
            pattern={this.props.pattern || null}
            ref={this.props.inputRef || this.id}
            placeholder=""
            onKeyPress={this.keyPress}
            title={this.props.title || ''}
            style={inputContainerStyle}
          />
          {this.props.helpText &&
              <Help
                text={this.props.helpText}
                style={helpContainerStyle}
              />
          }
      </div>

    )
  }
}
export default Input;
