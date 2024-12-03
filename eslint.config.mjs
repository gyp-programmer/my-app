/*
 * eslint默认配置文件
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-26 10:25:27
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    rules: {
      /** 可以出现any类型 */
      "@typescript-eslint/no-explicit-any": "off",
      /** 需要分号 */
      semi: ["error", "always"],
      /** 可以使用require */
      "@typescript-eslint/no-require-imports": "off",
      /** 可以用ts-ignore */
      "@typescript-eslint/ban-ts-comment": "off",
      /**
       * 不检查以下划线开头的 未使用的变量
       * 包含了参数变量，解构变量，catch中的参数变量
       */
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      /** 可以使用双感叹号 */
      "no-extra-boolean-cast": "off",
      "no-unreachable": "off",
      "no-undef": "off",
    },
  },
  {
    ignores: [
      "config/",
      "tiktok/",
      "build/",
      "public/",
      "scripts/",
      "mock/",
      ".vercel/",
      ".vscode/",
      "src/utils/XMLToJson.js",
      "**/*.test.js",
      "**/dist",
      "**/z-static",
    ],
  },
  /** 加入settings配置，用于eslint-plugin-react 中的读取 */
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
