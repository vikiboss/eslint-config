const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const isTsProject = isPackageExists('typescript')

const preset = isTsProject ? '@vmoe/eslint-config-ts' : '@vmoe/eslint-config-vanilla'

module.exports = defineConfig({
  extends: [preset],
})
