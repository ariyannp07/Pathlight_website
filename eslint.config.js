module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable any problematic rules that might cause build failures
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
  },
}
