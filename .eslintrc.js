module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  globals: {
    use: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {}
}
