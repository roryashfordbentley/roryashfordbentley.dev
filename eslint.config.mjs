import storybook from 'eslint-plugin-storybook'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

// require the TypeScript parser + plugin (CommonJS)
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')

const baseConfigWithTsParser = {
  // apply parser + plugin globally
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: ['./tsconfig.json'], // needed for type-aware rules; adjust path if needed
      tsconfigRootDir: __dirname,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
  rules: {
    // optional: put any global rules here (or merge your existing eslintConfig rules)
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^(_|ignore)',
      },
    ],
  },
}

export default [baseConfigWithTsParser, ...storybook.configs['flat/recommended']]
