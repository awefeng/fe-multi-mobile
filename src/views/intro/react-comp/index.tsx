import { FC, useLayoutEffect, useState } from 'react'
// import ClassComp from './class-comp'

let render = 0

const Index: FC = () => {
  const [num, setNum] = useState(1)

  useLayoutEffect(() => {
    console.log('useLayoutEffect - 空数组 - main', num)
    return () => {
      console.log('useLayoutEffect - 空数组 - return', num)
    }
  }, [])
  useLayoutEffect(() => {
    console.log('useLayoutEffect - 没有依赖 - main', num)
    return () => {
      console.log('useLayoutEffect - 没有依赖 - return', num)
    }
  })
  useLayoutEffect(() => {
    console.log('useLayoutEffect - 有num依赖 - main', num)
    return () => {
      console.log('useLayoutEffect - 有num依赖 - return', num)
    }
  })

  render = render + 1
  console.log(`render 了 ${render} 次`)
  return (
    <div>
      函数式组件和类组件
      {/* <ClassComp a={2} /> */}
      <br />
      -------------
      <div>
        state: num = {num}
        <button onClick={() => setNum(num + 1)}>+ 1</button>
      </div>
    </div>
  )
}

export default Index
