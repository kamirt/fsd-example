import pluginVue from 'eslint-plugin-vue'
export default [
    'eslint:recommended',
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
        }
    }
]