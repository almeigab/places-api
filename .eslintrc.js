module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'max-len': [
      'error',
      100,
    ],
    'comma-spacing': 'error',
    'arrow-spacing': 'error',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  },
};
