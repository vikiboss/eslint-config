const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:@typescript-eslint/recommended', '@vmoe/eslint-config-vanilla'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
    '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'separate-type-imports' }]
  }
})
