# @vmoe/eslint-config

Viki's shareable opinionated [ESLint](https://eslint.org) config monorepo.

**Features:**

- base on [standard](https://github.com/standard/eslint-config-standard)
- support `React` & `Vanilla JS/TS`

**Packages:**

- `@vmoe/eslint-config`: rules for `TypeScript` (fallback to vanilla JS if no TS module detected)
- `@vmoe/eslint-config-vanilla`: rules for base `JavaScript`
- `@vmoe/eslint-config-ts`: rules for `TypeScript` and `JavaScript`
- `@vmoe/eslint-config-react`: rules for `React` (`TypeScript` by defaults)

## Usage

Install these dev dependencies via package manager of your choice.

```shell
pnpm add -D eslint prettier @vmoe/eslint-config @vmoe/prettier-config
```

```shell
npm i -D eslint prettier @vmoe/eslint-config @vmoe/prettier-config
```

```shell
yarn add -D eslint prettier @vmoe/eslint-config @vmoe/prettier-config
```

Config your `.eslintrc`

```json
{
  "extends": "@vmoe"
}
```

Config your `.prettierrc`

```json
"@vmoe/prettier-config"
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

Run the script via package manager of your choice

```shell
npm run lint  # npm
yarn run lint # yarn
pnpm run lint # pnpm
```
