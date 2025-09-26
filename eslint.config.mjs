import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,   // اضافه برای server.js
        Vue: "readonly",   // برای Vue global
        VueRouter: "readonly" // برای Vue Router global
      },
    },
    plugins: { vue: pluginVue },
    rules: {
      "vue/no-deprecated-data-object-declaration": "warn",
    },
    extends: [
      js.configs.recommended,
      ...pluginVue.configs["flat/essential"],
    ],
  },
]);
