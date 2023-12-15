/* eslint-disable */
// 用于监听 en-US.json 文件的变化，自动同步到 zh-CN.json
const fs = require("fs");
const ora = require("ora");
const chalk = require("chalk");
const spinner = ora("正在监听 en 文件的变化,程序将自动同步到 zh 文件！\n");
spinner.start();
// 定义要读取的 en 的路径
const enUSPath = "./src/locales/en/index.ts";

// 定义要写入的 zh 的路径
const zhCNPath = "./src/locales/zh/index.ts";

fs.watchFile(enUSPath, (curr, prev) => {
  // 读取en.js 中的内容
  fs.readFile(enUSPath, "utf-8", (err, data) => {
    if (err) {
      console.error(chalk.red("文件读取失败," + err));
      return;
    }
    const enUS = JSON.parse(data.substring(data.indexOf("{"))); // 转换为对象
    const zhCN = {}; // 定义一个空对象，用于存储转换后的数据

    for (const key in enUS) {
      zhCN[key] = key;
    }
    // 写入zh
    fs.writeFile(zhCNPath, "export default " + JSON.stringify(zhCN, null, 2), "utf-8", (err) => {
      if (err) {
        console.error(chalk.red("文件写入失败," + err));
        return;
      }
      console.log(chalk.green("中文同步成功!"));
    });
  });
});
