module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: [
    '/coverage/',
    '/node_modules/',
    'dist', '.eslintrc.cjs'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': 'error',
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 1,
    'max-len': ['error', { code: 80 }],
    'no-console': 1,
    'no-multi-spaces': 'error',
    'no-sequences': 'error',
    'no-use-before-define': 'error',
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    radix: 'error',
    semi: 'error',

    'import/prefer-default-export': 0,
    'import/no-unresolved': 'error',
    'no-restricted-exports': 0,
    'import/no-cycle': [
      'error',
      { ignoreExternal: true },
    ],
  },
};
