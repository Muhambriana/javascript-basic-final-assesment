import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    languageOptions: { globals: globals.node },
    rules: {
       // Always use semicolons at the end of statements
      semi: ['error', 'always'],

      // Enforce 2 spaces for indentation
      indent: ['error', 2],

      // Use `const` if the variable is never reassigned
      'prefer-const': 'error',

      // Add spaces around curly braces and property names in object literals
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    },
  },
  tseslint.configs.recommended,
]);