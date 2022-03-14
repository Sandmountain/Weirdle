module.exports = {
  root: true,
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "no-console": 1, // Warns for console logs
    "prettier/prettier": 2, // Error for all formatting errors
    "react-native/no-inline-styles": 0,
  },
  extends: [
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-explicit-any": "error",
      },
    },
  ],
};
