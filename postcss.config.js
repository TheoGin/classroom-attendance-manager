module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      selectorBlackList: ['ignore-']  // 忽略包含 ignore- 的类名
    }
  }
}
