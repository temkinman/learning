module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends:
    'plugin:react/recommended',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'no-alert': 0,
    'no-restricted-globals': 0,
    'no-plusplus': 0,
    'no-unused-vars': 0,
  },
};
