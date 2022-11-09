const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-recommended', 'viki-ts'],
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
