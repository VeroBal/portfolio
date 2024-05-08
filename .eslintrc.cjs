module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Apply TypeScript rules only to TypeScript files
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  ignorePatterns: ["*.cjs", "node_modules/"], // Ignore CommonJS files and node_modules
};