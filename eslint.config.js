import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.node },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/arrow-parens': ['error', 'always'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/multiline-ternary': ['error', 'always'],
      '@stylistic/js/no-extra-semi': 'error',
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/js/semi': ['error', 'always'],
      'no-nested-ternary': 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-template': 'error',
    },
  },
];
