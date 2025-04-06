import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react, // added react plugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], // Ensure no unused variables
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-uses-react': 'error', // Ensure React is in scope if using JSX
      'react/jsx-uses-vars': 'error',  // Ensures JSX variables are used (important for function components)
      'no-unused-imports': 'error',   // Ensures all imports are used
      'react/jsx-no-undef': ['error', { allowGlobals: true }], // Ensures components are not used without import
      'react/prop-types': 'warn',     // Warns if prop types are not defined (if using prop types validation)
      'react/display-name': 'warn',   // Warn if a component does not have a displayName property (important for debugging)
      'react/no-unused-prop-types': 'warn', // Warn if there are unused prop types
      'react/react-in-jsx-scope': 'error', // Ensures React is in scope when JSX is used (for older React versions)
    },
  },
];
