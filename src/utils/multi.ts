// 第一种检测方法
// import {
//   isAndroid,
//   isIOS,
//   isMobile,
//   isDesktop,
//   isTablet,
//   isBrowser,
//   getUA
// } from 'react-device-detect'

// 第二种检测方法
// see API https://faisalman.github.io/ua-parser-js-docs/v2/api/ua-parser-js/overview.html
import { UAParser, UAParserInstance } from 'ua-parser-js'

let parser: UAParserInstance

// OS TYPE
let isAndroid = false

const isIOS = false
// DEVICE TYPE
const isMobile = false
const isTablet = false
// PLATFORM TYPE
const isDesktop = false
const isBrowser = false
const uaInit = () => {
  parser = new UAParser()
  const os = parser.getOS()

  isAndroid = os.name === 'Android'
}

export {
  uaInit,
  isAndroid,
  isIOS,
  isMobile,
  isTablet,
  isDesktop,
  isBrowser,
  parser
}
