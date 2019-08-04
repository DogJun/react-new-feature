// 没有自身的状态
// 相同的props输入必然会获得完全相同的组件展示
// 不需要关心组件的一些生命周期和渲染的钩子更加简洁
import React, { Component } from 'react'

const Button = ({ name }) => {
  return (
    <div>
      <button class="btn btn-warning">我是{name}</button>
    </div>
  )
} 

class Greeting extends Component {
  render () {
    return <Button name="DogJun"></Button> 
  }
}

export default Greeting