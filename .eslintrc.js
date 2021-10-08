module.exports = {
  // extends: ['@mate-academy/eslint-config-react-typescript', 'plugin:cypress/recommended'],
  extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
  },
};
