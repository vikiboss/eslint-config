const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  plugins: ['import', 'react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'viki-ts'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
})
