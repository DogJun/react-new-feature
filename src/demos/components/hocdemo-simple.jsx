//===============demo1================
// function hello () {
//   console.log('🚀我是高阶组件')
// }
// function hoc (fn) {
//   return () => {
//     console.log('first')
//     fn()
//     console.log('end')
//   }
// }
// const hocResult = hoc(hello)
// hocResult()
//===============demo2================
// let welcome = (username) => {
//   console.log('hello' + username)
// }
// let goodbye = (username) => {
//   console.log('bye' + username)
// }
// function wrapWithUsername (wrappedFunc) {
//   return () => {
//     let username = localStorage.getItem('username')
//     wrappedFunc(username)
//   }
// }
// welcome = wrapWithUsername(welcome)
// goodbye = wrapWithUsername(goodbye)

// welcome()
// goodbye()
//===============demo3================
// import React, { Component } from 'react'

// function HOCFactoryFactory (...params) {
//   return function HOCFactory (WrappedComponent) {
//     return class HOC extends Component {
//       render () {
//         return <WrappedComponent {...this.props} />
//       }
//     }
//   }
// }
// // 使用方式1
// @HOCFactoryFactory({})
// class WrappedComponent extends React.Component {}
// // 使用方式2
// HOCFactoryFactory({})(WrappedComponent)

// redux
// 把redux的state和action创建函数，通过props注入给了Component
// 在目标组件Component里面可以直接用this.props去调用redux state和action创建函数

// ConnectedComponent = connect(mapStateToProps, mapDispatchToprops)(Component)
