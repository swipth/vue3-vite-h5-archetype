module.exports = () => {
  return {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 375,
        viewportHeight: 1334,
        unitPrecision: 5,
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        landscapeUnit: 'vw', // 横屏时使用的单位
        landscapeWidth: 568 // 横屏时使用的视口宽度
      }
    }
  }
};
