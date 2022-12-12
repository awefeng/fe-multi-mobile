import { Fragment } from 'react'
import type { FC } from 'react'
import styles from './index.less'
import { BlockOutlined, LayoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const IntroArr = [
  { name: 'UI组件', to: '/components', icon: <BlockOutlined /> },

  { name: 'UI适配', to: '/layout', icon: <LayoutOutlined /> }
]
const Welcome: FC = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <div className={styles.welcome}>
        <span>欢迎~</span>
        <br />
        <span>这是一个移动端多端合一的项目demo</span>
      </div>
      <div className={styles.gridContainer}>
        {IntroArr.map((item) => (
          <div
            className={styles.item}
            key={item.to}
            onClick={() => {
              navigate(item.to)
            }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <span className={styles.title}>{item.name}</span>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Welcome
