import {
  isAndroid,
  isIOS,
  isMobile,
  isDesktop,
  isTablet,
  isBrowser,
  getUA
} from 'react-device-detect'

function isAppPlatform() {
  return Math.random() < 0.5
}

function isWxPlatform() {
  return /micromessenger/i.test(getUA)
}

const isApp = isAppPlatform()
const isWx = isWxPlatform()
/**
function isWxPlatform() {
  return new Promise((resolve) => {
    // windows phone没有micromessenger
    if (/micromessenger/i.test(getUA)) {
      resolve(true)
      return
    }
    if (
      window.WeixinJSBridge &&
      typeof window.WeixinJSBridge.invoke == 'function'
    ) {
      resolve(true)
      return
    }

    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', function () {
        resolve(true)
        return
      })
    }

    resolve(false)
    return
  })
}
 */

export {
  isAndroid,
  isIOS,
  isMobile,
  isTablet,
  isDesktop,
  isApp,
  isBrowser,
  isWx,
  getUA as UA
}
