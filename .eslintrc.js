/*
 * @Author: LinRenJie
 * @Date: 2023-02-11 15:18:19
 * @LastEditTime: 2023-02-11 15:26:03
 * @Description:
 * @FilePath: /taro-nut4/.eslintrc.js
 * @Email: xoxosos666@gmail.com
 */
module.exports = {
  globals: {
    wx: 'readonly',
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: 'plugin:vue/vue3-essential',
  overrides: [],
  parser: '@typescript-eslint/parser',
  //   parserOptions: {
  //     ecmaVersion: 'latest',
  //     sourceType: 'module',
  //   },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    noInlineConfig: 0,
    'no-debugger': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error'], //禁止使用any
    eqeqeq: 2, //必须使用全等
    'max-lines': ['error', 500], //限制行数 请勿修改 请优化你的代码
    complexity: ['error', 5], // 限制复杂度
    'require-await': 'error',
  },
}
