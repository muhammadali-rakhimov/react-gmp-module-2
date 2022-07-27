module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 0,
    'arrow-body-style': 0,
    'no-useless-return': 0,
    'no-else-return': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': 0,
    'react/destructuring-assignment': [0, 'always'],
    'no-unused-vars': 'off',
  },
}
