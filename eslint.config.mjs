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
        ...globals.node,   
        Vue: "readonly",   
        VueRouter: "readonly" 
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
