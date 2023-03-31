const { defineConfig } = require('eslint-define-config')
const { builtinModules } = require('node:module')

// prefer using `node:<module>` protocol when importing Node.js builtin modules
const modules = builtinModules.map((mod) => `node:${mod}`)

const ignorePatterns = [
  '*.{test,spec,dto}.{m,c}?{j,t}sx?',
  '*{rc,.config}.{m,c}?{j,t}sx?',
  '*.min.*',
  '**/{public,dist,build,vendor,output,coverage}{,/*}',
  '**/node_modules{,/*}'
]

const importOrder = [
  ['builtin', 'external'],
  'internal',
  ['sibling', 'parent', 'object', 'index'],
  'type',
  'unknown'
]

const importOption = {
  'newlines-between': 'always',
  groups: importOrder,
  warnOnUnassignedImports: true,
  alphabetize: {
    order: 'asc',
    caseInsensitive: true
  }
}

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  ignorePatterns,
  rules: {
    'no-await-in-loop': 'off',
    'no-undef': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',

    'import/order': ['warn', importOption],
    'import/no-nodejs-modules': ['warn', { allow: modules }],
    'import/no-extraneous-dependencies': 'warn'
  }
})