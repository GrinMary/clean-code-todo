const js = require("@eslint/js");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    rules: {
      "no-var": "error",        // запрет var — использовать let/const
      "prefer-const": "error",  // переменные, не переприсваиваемые → const
      "no-console": "warn",     // предупреждать о console.log
    },
  },
]);
