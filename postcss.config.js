module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5, // 小数点
      propList: ['*'], // 所有的px都转换
      selectorBlackList: [], //需要忽略的选择器
      replace: true,
      exclude: /node_modules/i
    }
  }
}
