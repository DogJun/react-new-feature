import React from 'react'
const {memo, useMemo, useCallback, useState} = React

const Counter = memo(props => {
  console.log('子组件渲染')
  return <h1 onClick={props.onClick}>1</h1> 
})
// const onClick = () => {
//   console.log('click')
// }
export default function App () {
  const [count, setCount] = useState(0)
  // const onClick = () => {
  //   console.log('click')
  // }
  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('click')
  //   }
  // }, [])
  const onClick = useCallback(() => {
    console.log('click')
  }, [])
  return (
    <>
      <span>{count}</span>
      <input
        type="button"
        onClick={() => setCount(count + 1)}
        value="修改count"
      />  
      <Counter onClick={onClick}/>
    </>
  )
}