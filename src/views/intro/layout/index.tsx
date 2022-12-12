import { THE_UI_DESIGN_SIZE } from '@/utils/rem'
import type { FC } from 'react'
import styles from './index.less'

const IntroLayout: FC = () => {
  return (
    <div className={styles.layout}>
      width: 200px; <br />
      设计稿尺寸{THE_UI_DESIGN_SIZE}
    </div>
  )
}

export default IntroLayout
