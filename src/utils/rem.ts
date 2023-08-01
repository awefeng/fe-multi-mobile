import postCssConfig from '../../postcss.config'

export const THE_UI_DESIGN_SIZE = 375 // UI设计稿尺寸
const DEFAULT_DOCUMENT_FONT_SIZE = 16 //默认尺寸
//默认支持到4倍设计稿的屏幕都等比缩放
const setRem = () => {
  const DOCUMENT_FONT_SIZE =
    postCssConfig.plugins['postcss-pxtorem']?.rootValue ??
    DEFAULT_DOCUMENT_FONT_SIZE
  const MAX_SUPPORT_SCALE = 2
  const scale = document.documentElement.clientWidth / THE_UI_DESIGN_SIZE
  const size = DOCUMENT_FONT_SIZE * Math.min(scale, MAX_SUPPORT_SCALE)

  document.documentElement.style.fontSize = `${size}px`
}

export function remInit() {
  window.onresize = setRem
  setRem()
}
