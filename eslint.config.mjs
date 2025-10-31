import storybook from 'eslint-plugin-storybook'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// FlatCompat allows using older configs if needed (like eslint-config-next)
const compat = new FlatCompat({ baseDirectory: __dirname })

const baseConfigWithTsParser = {
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: ['./tsconfig.json'], // type-aware rules
      tsconfigRootDir: __dirname,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin, // move plugins here
  },
  rules: {
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

// Export final config with Storybook's flat config
export default [baseConfigWithTsParser, ...storybook.configs['flat/recommended']]
