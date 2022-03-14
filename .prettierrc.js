module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "avoid",
  useTabs: false,
  printWidth: 80, // Default
  importOrder: [
    "^react$|^react-native$", // Sort all react components on top
    "<THIRD_PARTY_MODULES>", // Sort all third party in center
    "^[./]", // Sort all local files last
  ],
  importOrderSeparation: true,
  endOfLine: "auto",
};
