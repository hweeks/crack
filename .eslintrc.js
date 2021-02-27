module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
