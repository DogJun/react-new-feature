// context 主要是解决props向多层嵌套的子组件传递的问题，原理是定义了一个全局对象
// context 可以有多个，对应的Provider, Consumer需要嵌套，顺序不重要
import React from 'react'

// 'default' 为默认值
const defaultContext = React.createContext('default')
const { Provider, Consumer } = defaultContext
class Parent extends React.Component {
  state = {
    name: 'DogJun',
    newContext: 'react'
  }
  render () {
    // <React.Fragment> == <>
    return (
      <>
        <div>
          <label className="text-warning">父节点 => newContext:</label>
          <input 
            type="text" 
            value={this.state.newContext} 
            onChange={e => this.setState({newContext: e.target.value})}
          />
        </div>
        <div>
          <label className="text-info">父节点 => name</label>
          <input 
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value})}
          />
        </div>
        <Provider value={{ newContext: this.state.newContext, name: 'DogJun' }}>
          {this.props.children}
        </Provider>  
      </>
    )
  }
}

function Child (props, context) {
  return (
    <Consumer>
      {
        value => (
          <p className="text-warning">子节点 => newContext: {value.newContext}</p>
        )
      }
    </Consumer>  
  )
}

class Child2 extends React.Component {
  // React 16.6引入了在不直接使用Consumer组件的情况下从上下文消费数据的功能
  // 推荐这种写法，更加简洁
  static contextType = defaultContext
  render () {
    // const value = this.context
    const { name } = this.context
    return (
      <p className="text-info">子节点 => myname: {name}</p>
    )
  }
}

export default () => (
  <Parent>
    <Child />
    <Child2 />
  </Parent>
);