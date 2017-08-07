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
      <Input label="Input value" id="input-value-1" value={this.state.value1} onChange={this.onChange('value1')} />

      <h2>Small input</h2>
      <Input label="Input value" placeholder="Enter value" id="input-value-2" value={this.state.value2} onChange={this.onChange('value2')} maxWidth="50px"/>


      <h2>With errors</h2>
      <Input label="Input value" id="input-value-3" value={this.state.value3} onChange={this.onChange('value3')} error="Value invalid"/>

      <h2>With required</h2>
      <Input
        label="Input value"
        id="input-value-4"
        value={this.state.value4}
        onChange={this.onChange('value4')}
        required={true}
        />


    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
