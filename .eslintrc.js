module.exports = {
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier', 'import'],
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: {} },
  },
  rules: {
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        endOfLine: 'auto',
      },
    ],
    'react/jsx-fragments': 0,
    'react/jsx-wrap-multilines': 0,
    // TODO: maybe remove this
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-use-before-define': 0,
  },
  parser: '@typescript-eslint/parser',
};
