module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "arrow-parens": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-restricted-syntax": 0,
    quotes: 0,
    "no-console": 0,
    "object-curly-newline": 0,
    "consistent-return": 0,
    "func-names": 0,
    "prefer-const": 0,
    "comma-dangle": 0,
    "no-param-reassign": 0,
    "operator-linebreak": 0,
    "prefer-destructuring": 0,
    "global-require": 0,
    "no-use-before-define": 0,
    "no-plusplus": 0,
    "no-continue": 0,
    "import/no-unresolved": 0,
    "implicit-arrow-linebreak": 0
  },
};
