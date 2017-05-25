import React, {Component} from 'react'
import {render} from 'react-dom'

import Input from '../../src'

class Demo extends Component {

  constructor(props) {
      super(props)
      this.state = {
        value:''
      }

  }
  onChange = (field) => {
    return (value) => {
      this.setState((prevState, props) => ({
        [field]: value
      }))
    }
  }

  render() {
    return <div>
      <h1>Input</h1>

      <h2>Basic input</h2>
      <Input label="Input value" id="input-value" value={this.state.value} onChange={this.onChange('value')} />

      <h2>Small input</h2>
      <Input label="Input value" placeholder="Enter value" id="input-value" value={this.state.value} onChange={this.onChange('value')} maxWidth="50px"/>


      <h2>With errors</h2>
      <Input label="Input value" id="input-value" value={this.state.value} onChange={this.onChange('value')} error="Value invalid"/>

    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
