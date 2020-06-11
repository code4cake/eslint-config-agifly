module.exports = {  
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
        singleQuote: false
      }
    }
  ]
}
    