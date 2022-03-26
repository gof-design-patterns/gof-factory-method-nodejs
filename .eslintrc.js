module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: false
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off'
  }
}
