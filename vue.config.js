module.exports = {
  pwa: {
    themeColor: '#FFFFFF',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public\\service-worker.js'
    }
  },
  transpileDependencies: ['vuetify'],

  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
  },
}
