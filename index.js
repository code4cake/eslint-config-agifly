module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    // general ESLint rules
    'no-case-declarations': 0,
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-plusplus': 0,
    'sort-keys': 0,
    'sort-imports': 'off',
    'max-lines': ['warn', 300], // max-lines of code in a file + comments

    // rules for https://github.com/benmosher/eslint-plugin-import
    'import/extensions': 0,
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,

    // rules for https://www.npmjs.com/package/eslint-plugin-jest
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // overwrite https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    // rules
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'never' },
    ], // use "" when passing a string as a property
    'react/jsx-filename-extension': 0, // jsx is also allowed in .js files
    'react/sort-comp': 2,
  },
  overrides: [
    {
      files: ['./src/**/*.test.js', './src/**/*.spec.js'],
      globals: {
        React: true,
      },
      rules: {
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
        'no-console': 0,
      },
    },
  ],
}