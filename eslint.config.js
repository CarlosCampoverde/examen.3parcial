export default [
    {
        ignores: ['node_modules/**', 'coverage/**', 'dist/**', 'build/**']
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            semi: ['error', 'always'],
            
        }
    }
];