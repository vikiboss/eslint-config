const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['viki-base', 'viki-ts', 'viki-react', 'viki-vue'],
});
