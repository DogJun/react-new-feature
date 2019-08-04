// React.memo() 是高阶函数能将函数组件转换成类似于React.PureComponent组件

import React from 'react'

function Child ({seconds}) {
  console.log('I am rendering')
  return (
    <div>I am update every {seconds} seconds</div>
  )
}

export default React.memo(Child)