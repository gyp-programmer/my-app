/*
 * 去除代码中的console语句--plugin
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-09-10 13:52:28
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */
const pluginName = "consoleRemovePlugin";

class RemoveConsolePlugin {
  /**
   * 参数types 为数组，传入*为所有类型
   * ['log', 'info', 'warn', 'error'] === ['*']
   * 也可以按需传入
   */
  constructor(options) {
    if (options.types) {
      if (!Array.isArray(options.types)) {
        throw new Error("【consoleRemovePlugin】error: types must be an array");
      } else {
        if (options.types.includes("*")) {
          options.types = ["log", "info", "warn", "error"];
        }
        options.types.forEach(type => {
          if (!["log", "info", "warn", "error"].includes(type)) {
            throw new Error(
              "【consoleRemovePlugin】error: types must be log, info, warn, error",
            );
          }
        });
      }
    } else {
      this.options.types = ["log", "info", "warn", "error"];
    }
    this.options = options;
  }

  apply(compiler) {
    let handler = (assets, compilation) => {
      /** 处理正则表达式：用来匹配console.*()和console.*() */
      let removedStr = this.options.types.reduce((a, b) => a + "|" + b);

      let reDict = {
        1: [RegExp(`\\.console\\.(${removedStr})\\(\\)`, "g"), ""],
        2: [RegExp(`\\.console\\.(${removedStr})\\(`, "g"), ";("],
        3: [RegExp(`console\\.(${removedStr})\\(\\)`, "g"), ""],
        4: [RegExp(`console\\.(${removedStr})\\(`, "g"), "("],
      };

      Object.entries(assets).forEach(([filename, source]) => {
        let outputContent = source.source();
        if (/\.(js|ts|jsx|tsx)/.test(filename)) {
          Object.entries(reDict).forEach(([_, value]) => {
            outputContent = outputContent.replace(value[0], value[1]);
          });

          compilation.assets[filename] = {
            source: () => outputContent,
            size: () => Buffer.byteLength(outputContent, "utf8"),
          };
        }
      });
    };

    // https://webpack.docschina.org/api/compiler-hooks/#compilation
    /**
     *  compilation钩子
     *  compilation 创建之后执行
     */
    compiler.hooks.compilation.tap(pluginName, compilation => {
      // https://webpack.docschina.org/api/compilation-hooks/#processassets
      // webpack5的钩子，不使用webpack4
      // afterProcessAssets钩子的使用而不是processAssets，
      // 是因为webpack包中的sourceMapDevToolPlugin.js使用processAssets钩子，
      // 我们的插件会更改source对象，导致sourceMapDevToolPlugin.js插件无法正确使用asset.source
      // 具体体现在node_modules/webpack/lib/SourceMapDevToolPlugin.js中getTaskForFile方法
      compilation.hooks.afterProcessAssets.tap(
        {
          name: pluginName,
        },
        assets => handler(assets, compilation),
      );
    });
  }
}

module.exports = RemoveConsolePlugin;
