// Minimal ESLint config
// Purpose: silence empty-config warning and keep CI green
// No strict rules, no formatting enforcement

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {},
  },
];
