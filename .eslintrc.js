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
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto', singleQuote: true, parser: 'flow' },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/destructuring-assignment': [0, 'always'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
  },
}
