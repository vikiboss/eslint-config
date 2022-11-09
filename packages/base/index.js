const { defineConfig } = require('eslint-define-config')
const { builtinModules } = require('node:module')

// prefer using `node:<module>` protocol when importing Node.js builtin modules
const modules = builtinModules.map((mod) => `node:${mod}`)

module.exports = defineConfig({
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  extends: 'standard',
  ignorePatterns: ['*.min.*', 'node_modules', 'build', 'dist'],
  rules: {
    'import/no-nodejs-modules': ['error', { allow: modules }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
})
