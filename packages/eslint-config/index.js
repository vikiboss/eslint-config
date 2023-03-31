const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@vmoe/eslint-config-react', '@vmoe/eslint-config-vue']
})
