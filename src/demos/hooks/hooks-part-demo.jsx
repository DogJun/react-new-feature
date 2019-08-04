/**
 * useState 返回有状态值，以及更新这个状态值的函数
 * useEffect 接受包含命令式，可能有副作用代码的函数
 * useContext 接受上下文对象（从React.createContext返回的值）并返回当前上下文值
 * useReducer useState的替代方案，接受类型（state, action）=> newState的reducer，并返回与dispatch方法配对的当前状态
 * useCallback 返回一个记忆的memoized版本，该版本仅在其中一个输入发生更改时才会改变，纯函数的输入输出确定性
 * useMemo 纯的一个记忆函数
 * useRef 返回一个可变的ref对象，其.current属性被初始化为传递的参数
 * useImperativeMethods 自定义使用ref时公开给父组件的实例值
 * useMutationEffect 更新兄弟组件之前，它在React执行其DOM改变的同一阶段同步触发
 * useLayoutEffect DOM改变后同步触发，使用它来从DOM读取布局并同步重新渲染
 */
// import React, {
//   memo,
//   createContext,
//   forwardRef,
//   useState,
//   useEffect,
//   useCallback,
//   useContext,
//   useRef,
//   useImperativeHandle
// } from 'react'