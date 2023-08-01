import { FC, Fragment } from 'react'
import { isAndroid, isIOS, isMobile, isDesktop, isBrowser } from '@/utils/multi'

const IntroMulti: FC = () => {
  return (
    <Fragment>
      检测多端———— 详见：
      <a href='https://github.com/duskload/react-device-detect/blob/HEAD/docs/selectors.md'>
        selector
      </a>
      <br />
      <br />
      <ul>
        <li>当前UA：{UA}</li>
        <br />
        <li>isAndroid: {String(isAndroid)}</li>
        <li>isIOS: {String(isIOS)}</li>
        <li>isMobile: {String(isMobile)}</li>
        <li>isWx: {String(false)}</li>
        <li>isDesktop: {String(isDesktop)}</li>
        <li>isBrowser: {String(isBrowser)}</li>
        <li>isAPP: 需要APP的JsBridge支持检测能力 - {String(false)}</li>
      </ul>
      <br />
      ---------
      {isAndroid && isMobile && true && (
        <div>当前文本只在安卓+手机+微信环境显示</div>
      )}
    </Fragment>
  )
}

export default IntroMulti
