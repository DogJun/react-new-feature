import React, { PureComponent } from 'react'

class CountButton extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  render () {
    return (
      <button
        className="btn btn-info"
        onClick={() => this.setState(state => ({count: state.count + 1}))}
      >
        Count: {this.state.count}
      </button>
    ) 
  }
}

export default CountButton