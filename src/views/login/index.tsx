import { Fragment } from 'react'
import type { FC } from 'react'
import { Button } from 'zarm'
import { useAuth } from '@/utils/auth'
import { useLocation, useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const { signIn } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const state: any = location.state
  const from = state ? state.from : '/'

  return (
    <Fragment>
      <h2>欢迎登录</h2>
      <Button
        onClick={() => {
          signIn()
          navigate(from)
        }}
      >
        登录
      </Button>
    </Fragment>
  )
}

export default Login
