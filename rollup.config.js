// Rollup plugins
import babel from 'rollup-plugin-babel'

const babelOptions = {
  babelrc: false,
  exclude: 'node_modules/**',
  presets: [
    ['env', { modules: false }],
    ['stage-2']
  ]
}

const defaultOptions = {
  name: 'Brage'
}

export default [
  {
    input: 'src/modules/brage.js',
    output: Object.assign({
      file: 'dist/brage.es.js',
      format: 'es'
    }, defaultOptions),
    plugins: [
      babel(babelOptions)
    ]
  },

  {
    input: 'src/modules/brage.js',
    output: Object.assign({
      file: 'dist/brage.js',
      format: 'umd'
    }, defaultOptions),
    plugins: [
      babel(babelOptions)
    ]
  }
]
