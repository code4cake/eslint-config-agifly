// @format
module.exports = {
  plugins: ['react-hooks', 'prettier'],
  extends: [
    'airbnb', // JS Coding Standards by AirBnB
    'prettier', // extends prettier eslint rules
    'prettier/standard', // extends prettier/standard rules
    'prettier/react', // extends prettier/react rules
    'prettier/react', // tells prettier that we use React
    'plugin:jsx-a11y/recommended', // fixes accessibility problems in HTML
    'plugin:react-hooks/recommended', // fixes problems with React Hooks
    'plugin:react/recommended', // fixes a lot of React problems
    'plugin:prettier/recommended', // formatting our code with common rules
  ],
  parser: 'babel-eslint', // Async, Await, Array.flat(), Promise..
  settings: {
    react: {
      version: 'detect', // Auto detect the React version for our projects
    },
  },
  parserOptions: {
    ecmaVersion: 2020, // Last version of ECMAScript syntax
    sourceType: 'module', // Use import & export
    ecmaFeatures: {
      jsx: true, // Enable JSX for our parser
    },
  },
  env: {
    // environments I want it to run
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': ['warn'], // warns if components lack typechecking FlowJS or via PropTypes
    'no-return-assign': ['off'],
    'react-hooks/rules-of-hooks': 'error', // gives error if using React Hooks incorrectly
    'react-hooks/exhaustive-deps': 'warn', // warns me about incorrect use of React Hooks
    'no-console': 'warn',
    'prettier/prettier': [
      // General rules for prettier
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        useTabs: false,
        bracketSpacing: true,
        overrides: [
          {
            files: 'package*.json',
            options: {
              printWidth: 1000,
            },
          },
          {
            files: '*.yml',
            options: {
              singleQuote: false,
            },
          },
        ],
      },
    ],
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
