# eslint-config-viki

Viki's shareable [ESLint](https://eslint.org/) config monorepo.

**Features:**

- base on [standard](https://github.com/standard/eslint-config-standard)
- support `React` & `Vue`

**Packages:**

- `eslint-config-viki`: rules for `React` & `Vue` (`TypeScript` by defaults)
- `eslint-config-viki-base`: rules for base `JavaScript`
- `eslint-config-viki-ts`: rules for `TypeScript` and `JavaScript`
- `eslint-config-viki-react`: rules for `React` (`TypeScript` by defaults)
- `eslint-config-viki-vue`: rules for `Vue` (`TypeScript` by defaults)

## Usage

Install `eslint` and `eslint-config-viki` as dev dependency via package manager of choice.

```shell
npm i -D eslint eslint-config-viki     # npm
yarn add -D eslint eslint-config-viki  # yarm
pnpm add -D eslint eslint-config-viki  # pnpm
```

Config your `.eslintrc.js`

```js
module.exports = {
  // alternatives: viki-base viki-ts viki-react viki-vue
  extends: 'viki'
}
```

Add following scripts to `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Run the script via package manager of choice

```shell
npm run lint  # npm
yarn run lint # yarm
pnpm run lint # pnpm
```
