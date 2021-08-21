module.exports = {
  globals: {
    my: true,
    Page: true,
    App: true,
    getApp: true,
    Component: true,
    getCurrentPages: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'func-names': 0,
    'arrow-body-style': 0,
    'no-async-promise-executor': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/ban-types': 0,
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-console': 0,
    '@typescript-eslint/no-explicit-any': 0,
  }
};
