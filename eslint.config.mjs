import tseslint from "typescript-eslint"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import unusedImports from "eslint-plugin-unused-imports"
import simpleImportSort from "eslint-plugin-simple-import-sort"

export default tseslint.config(
  // 1. Use the recommended ESLint rules
  tseslint.configs.recommended,

  // 2. Integrates Prettier formatting into ESLint
  // (This must always be the last item in the array)
  eslintPluginPrettierRecommended,

  // 3. Global overrides and ignores
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.next/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Add custom rules here if needed
      "no-console": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "no-case-declarations": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
  }
)
