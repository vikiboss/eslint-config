# eslint-config-viki

Viki's shareable [ESLint](https://eslint.org/) config monorepo.

**Features:**

- base on [standard](https://github.com/standard/eslint-config-standard)
- support `React` & `Vue`

**Packages:**

- `eslint-config-viki`: rules for `React` & `Vue` (`TypeScript` by defaults)
- `eslint-config-base`: rules for base `JavaScript`
- `eslint-config-ts`: rules for `TypeScript` and `JavaScript`
- `eslint-config-react`: rules for `React` (`TypeScript` by defaults)
- `eslint-config-vue`: rules for `Vue` (`TypeScript` by defaults)

## Usage

Install `eslint-config-viki` as dev dependency via package manager of choice.

```shell
npm i -D eslint-config-viki     # npm
yarn add -D eslint-config-viki  # yarm
pnpm add -D eslint-config-viki  # pnpm
```

Config your `.eslintrc.js`

```js
module.exports = {
  // alternatives: viki-base viki-ts viki-react viki-vue
  extends: 'viki',
};
```
