const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  plugins: ['import', 'react', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'viki-ts',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
});
