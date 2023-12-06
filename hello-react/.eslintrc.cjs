module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier', "eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: { 
        react: {
            version: 'detect'
        }
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'react/jsx-filename-extension': 'off', 
        'prettier/prettier': [
            'error',
            { singleAttributeOerLine: false }
        ],
        'react/function-component-definition': [
            2,
            { namedComponents: '"arrow-function' },
        ],
        'prettier/prettier': 2,
    },
}
