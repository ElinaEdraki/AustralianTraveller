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
        Vue: "readonly",
        VueRouter: "readonly",
        test: "readonly",
        expect: "readonly",
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
