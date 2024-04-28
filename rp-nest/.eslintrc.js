const path = require("path");

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'nestjs'
    ],
    env: {
      node: true,
      jest: true,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      'no-console': 'error',
    },
  };