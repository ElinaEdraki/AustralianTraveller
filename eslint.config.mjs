import js from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.vue"],
    languageOptions: {
      globals: {
        ...require("globals")
      }
    },
    plugins: {
      vue: vuePlugin
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
