// Quoted from
// https://github.com/nuxt-community/typescript-template/blob/master/template/modules/typescript.js
// and
// https://qiita.com/haradakunihiko/items/6d95757a6b60f1982754
module.exports = function () {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts')
  // Extend build
  this.extendBuild(config => {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /(node_modules)/,
      options: {
        configFile: 'tslint.json'
      }
    })

    const tsLoader = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }
    // Add TypeScript loader
    config.module.rules.push(
      Object.assign(
        {
          test: /((client|server)\.js)|(\.tsx?)$/
        },
        tsLoader
      )
    )
    for (let rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        Object.assign(
          rule.options,
          {
            loaders:{
              ts: `ts-loader?{appendTsSuffixTo: "\\\\.vue$"]}!tslint-loader`
            }
          }
        )
      }
    }
    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts')
    }
  })
}
