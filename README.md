# @vmoe/eslint-config

Viki's shareable [ESLint](https://eslint.org/) config monorepo.

**Features:**

- base on [standard](https://github.com/standard/eslint-config-standard)
- support `React` & `Vue`

**Packages:**

- `@vmoe/eslint-config`: rules for `React` & `Vue` (`TypeScript` by defaults)
- `@vmoe/eslint-config-vanilla`: rules for base `JavaScript`
- `@vmoe/eslint-config-ts`: rules for `TypeScript` and `JavaScript`
- `@vmoe/eslint-config-react`: rules for `React` (`TypeScript` by defaults)
- `@vmoe/eslint-config-vue`: rules for `Vue` (`TypeScript` by defaults)

## Usage

Install `eslint` and `@vmoe/eslint-config` as dev dependency via package manager of choice.

```shell
npm i -D eslint prettier @vmoe/eslint-config     # npm
yarn add -D eslint prettier @vmoe/eslint-config  # yarn
pnpm add -D eslint prettier @vmoe/eslint-config  # pnpm
```

Config your `.eslintrc.js`

```js
module.exports = {
  extends: '@vmoe/eslint-config'
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
yarn run lint # yarn
pnpm run lint # pnpm
```
