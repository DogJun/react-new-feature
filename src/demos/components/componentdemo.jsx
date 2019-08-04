// 新增了render的返回值， fragment, string, 数组
import React, { Component } from 'react'
class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initalCount
    }
  }
  render () {
    // return <h4 className="text-warning">Hello, {this.props.name}</h4>;
    // return 'Hi, I\'m DogJun'
    return [
      <li key="A">我是<span role="img" aria-label="苹果">🍎</span></li>,
      <li key="B">我是<span role="img" aria-label="香蕉">🍌</span></li>,
      <li key="C">我是<span role="img" aria-label="西瓜">🍉</span></li>
    ]
  }
}

export default Greeting