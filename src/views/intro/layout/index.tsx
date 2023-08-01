import { THE_UI_DESIGN_SIZE } from '@/utils/rem'
import type { FC } from 'react'
import styles from './index.less'

const IntroLayout: FC = () => {
  return (
    <div className={styles.layout}>
      代码里width: 375 /2 = 187.5px;
      在配置的最大宽度里,永远占width一半，如果不对则配置的移动端适配有问题
      <br />
      设计稿尺寸{THE_UI_DESIGN_SIZE}
    </div>
  )
}

export default IntroLayout
