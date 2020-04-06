# @reactway/eslint-config

[![npm](https://img.shields.io/npm/v/@reactway/eslint-config)](https://www.npmjs.com/package/@reactway/eslint-config)
[![Azure DevOps builds](https://img.shields.io/azure-devops/build/reactway/reactway/8)](https://dev.azure.com/reactway/ReactWay/_build?definitionId=8&_a=summary)

Reactway's ESLint guidelines for TypeScript projects. Based on [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules) and [prettier/@typescript-eslint](https://github.com/prettier/eslint-config-prettier).

## Get started

```sh
npm install @reactway/eslint-config -D
```

## How to use?

Create config file in project root folder `.eslintrc.json`.

### Node projects

```sh
{
    "extends": ["@reactway"]
}
```

### React projects

```sh
{
    "extends": ["@reactway/eslint-config/react"]
}
```

### Troubleshooting

#### 1. 'React' is defined but never used.

If you're getting errors like:
```
C:\project-path\file-name.tsx(1,8): warning @typescript-eslint/no-unused-vars : 'React' is defined but never used.
```

Most probably you're configuring a React project and extended a non-React eslint config.

## License

Released under the [MIT license](LICENSE).
