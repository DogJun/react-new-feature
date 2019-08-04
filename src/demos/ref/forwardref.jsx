import React from 'react'

const TragetComponent = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} />
))

export default class Comp extends React.Component {
  constructor () {
    super()
    this.ref = React.createRef()
  }
  componentDidMount () {
    this.ref.current.value = '转发ref成功🍺'
  }
  render () {
    return <TragetComponent ref={this.ref} />
  }
}