import React from 'react'

import './input.css'

import TextField from 'material-ui/TextField'

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
          errorMessage: 'Must greater than zero'
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
    let val = e.target.value
    this.setState((prevState, props) => ({
      value:val
    }))
    if(this.props.onChange){
      this.props.onChange(val);
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


    return (
      <div>
        <TextField
          margin="normal"
          label={this.props.label}
          type={this.props.type || "text"}
          inputStyle={styles.inputStyle}
          value={this.state.value}
          floatingLabelText={this.props.label}
          onBlur={this.onBlur}
          onChange={this.onChange}
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
          width={this.props.width || ""}
          pattern={this.props.pattern || null}
          ref={this.props.inputRef || this.id}
          placeholder=""
          onKeyPress={this.keyPress}
        />
      </div>

    )
  }
}
export default Input;
