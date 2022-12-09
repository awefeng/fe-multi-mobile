import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Toast, Keyboard } from 'zarm'

const IntroComponents: FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>部分UI组件</h2>
      <div>
        <Button
          theme='primary'
          onClick={() => {
            Toast.show({ content: '点击了按钮' })
          }}
        >
          按钮
        </Button>

        <Button
          onClick={() => {
            navigate('/welcome')
          }}
        >
          首页
        </Button>
      </div>
      <Keyboard />
    </div>
  )
}

export default IntroComponents
