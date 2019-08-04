import React from 'react'

export default class RefDemo extends React.Component {
  constructor () {
    super()
    this.objRef = React.createRef()
  }
  componentDidMount () {
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got'
      this.methodRef.textContent = 'method ref got'
      this.objRef.current.textContent = 'obj ref got'
    }, 3000)
  }
  render () {
    return (
      <>
        <p className="text-success" ref="stringRef">span1</p>
        <p ref={ele => (this.methodRef = ele)}>span2</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}