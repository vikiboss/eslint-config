const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['viki-base', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',

    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',
  },
});
