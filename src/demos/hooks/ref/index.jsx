import React, {
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle
} from 'react'

const ContextComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    method() {
      console.log('ref方法执行了')
    }
  }))
  return <p>子组件</p>
})

export default function App () {
  const ref = useRef()
  useEffect(() => {
    console.log('component update')
    ref.current.method()
    return () => {
      console.log('unbind')
    }
  }, [])
  return (
    <>
      <ContextComp ref={ref} />
    </>
  )
}