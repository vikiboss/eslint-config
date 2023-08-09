const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', '@vmoe/eslint-config-ts'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/alt-text': 'off',
  },
})
