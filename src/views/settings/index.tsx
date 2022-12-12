import { USER_ROLE_ENUM } from '@/constants/user'
import { useAuth } from '@/utils/auth'
import { Button } from 'zarm'
import { Fragment } from 'react'
import type { FC } from 'react'
import { useTypedSelector } from '@/store'

const Setting: FC = () => {
  const { name } = useTypedSelector((state) => state.user)
  const { canUse } = useAuth()

  return (
    <Fragment>
      <h1>这是设置界面, 欢迎你 - {name}</h1>
      {canUse(USER_ROLE_ENUM.ADMIN) && <Button>只有ADMIN看见哦</Button>}
    </Fragment>
  )
}

export default Setting
