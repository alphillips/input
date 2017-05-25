import React from 'react'

import './ui-kit.css'
import './input.css'

class Input extends React.Component {

  constructor(props) {
      super(props)

      this.id = props.id || '_' + this.props.label.toLowerCase().replace(/ /g,'')

      this.state = {
        value:props.value || '',
        errorClass: '',
        errorMessage: ''
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
    if(nextProps.error){
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
    if(nextProps.value){
      this.setState((prevState, props) => ({
        value: nextProps.value
      }))
    }
  }

  onBlur = (e) => {
    let val = e.target.value
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

  render() {
    return (
      <div className={'text-group ' + this.state.errorClass}>
        {this.props.label && <label htmlFor={this.id}>{this.props.label}</label>}
        <input
          className="uikit-text-input uikit-text-input--block"
          style={this.linkStyle}
          id={this.id}
          type={this.props.type || "text"}
          value={this.state.value}
          onBlur={this.onBlur}
          onChange={this.onChange}
          placeholder={this.props.placeholder || ""}
        />
        <span role="alert" aria-live="polite" className={this.state.errorClass}>{this.props.error}</span>
      </div>
    )
  }
}
export default Input;
