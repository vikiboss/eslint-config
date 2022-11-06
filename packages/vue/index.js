const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['plugin:vue/vue3-recommended', 'viki-ts'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
});
