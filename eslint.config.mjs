// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
