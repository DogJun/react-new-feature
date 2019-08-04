import React, { Suspense, lazy } from 'react'
import { useFetch } from 'react-hooks-fetch'
import './suspense.css'
const LazyComp = lazy(() => import('./lazy'))

// function fetchApi () {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data resolved')
//     }, 3000)
//   })
//   return promise
// }

// // 创建fetcher
// var cached = {}
// const createFetcher = promiseTask => {
//   let ref = cached
//   return () => {
//     const task = promiseTask()
//     task.then(res => {
//       ref = res
//     })
//     console.log('🎄--ref', ref)
//     console.log('🌺--cached', cached)
//     if (ref === cached) {
//       throw task
//     }
//     console.log('🍎', ref)
//     return ref
//   }
// }

// const requestData = createFetcher(fetchApi)

function SuspenseComp() {
  // const data = requestData()
  // return <p className="text-warning">{data}</p>
  const { error, data } = useFetch('a.php')
  console.log('数据', data)
  if (error) return <span>出错了</span>
  if (!data) return null
  return <span>RemoteData: {data.title}</span> 
}

export default () => (
  <Suspense fallback={<div className="text-danger">loading<i></i></div>}>
    <LazyComp />
    <SuspenseComp />
  </Suspense>
)