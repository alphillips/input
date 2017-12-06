import React, {Component} from 'react'
import {render} from 'react-dom'

import Input from '../../src'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
    return (
    <MuiThemeProvider>
      <div>
        <h1>Input</h1>

        <h2>Basic input</h2>
        <Input label="Input value" id="input-value-1" value={this.state.value1} onChange={this.onChange('value1')} />

        <h2>Small input</h2>
        <Input label="Input value" placeholder="Enter value" id="input-value-2" value={this.state.value2} onChange={this.onChange('value2')} maxWidth="50px"/>


        <h2>With errors</h2>
        <Input label="Input value" id="input-value-3" value={this.state.value3} onChange={this.onChange('value3')} error="Value invalid"/>

        <h2>With required </h2>
        <Input
          label="Input value"
          id="input-value-4"
          value={this.state.value4}
          onChange={this.onChange('value4')}
          required={true}
          />


          <h2>With disabled </h2>
          <Input
            label="Input value"
            id="input-value-5"
            value={this.state.value5}
            onChange={this.onChange('value5')}
            disabled={true}
            />


            <h2>With min and max values </h2>
            <Input
              label="Input value"
              id="input-value-6"
              value={this.state.value6}
              onChange={this.onChange('value6')}
              min="1"
              max="10"
              type="text"
              width="2"
              maxlength="2"
              />

              <h2>Is number </h2>
              <Input
                label="Input value"
                id="input-value-7"
                value={this.state.value7}
                onChange={this.onChange('value7')}
                type="number"
                />

      </div>
    </MuiThemeProvider>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
//render(<MyComponent/>, document.querySelector('#demo'))
