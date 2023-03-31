const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:vue/vue3-recommended', '@vmoe/eslint-config-ts'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
})
