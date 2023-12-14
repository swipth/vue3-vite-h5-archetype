const fs = require("fs");
const path = require("path");
const { currentVersion } = require("./info");
// 选择 env 文件 判断打包环境指定对应的服务器id
const envFile = process.argv[2] === "production" ? "../.env.production" : "../.env.test";
// env环境变量的路径
const envPath = path.resolve(__dirname, envFile);
// env对象 读取文件
const envObj = parse(fs.readFileSync(envPath, "utf8"));
const writeVersion = () => {
  // 写入文件
  fs.writeFile(
    path.join(__dirname, "../" + envObj["VITE_OUT_PUT_NAME"] + "/static/version.json"),
    JSON.stringify({
      success: true,
      data: { version: currentVersion },
      code: 200,
      message: "版本获取成功",
    }),
    {},
    function (err) {
      if (err) throw err;
    }
  );
};

writeVersion();
function parse(src) {
  // 解析KEY=VAL的文件
  const res = {};
  src.split("\n").forEach((line) => {
    // matching "KEY" and "VAL" in "KEY=VAL"
    // eslint-disable-next-line no-useless-escape
    const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
    // matched?
    if (keyValueArr !== null) {
      const key = keyValueArr[1];
      let value = keyValueArr[2] || "";
      // expand newlines in quoted values
      const len = value ? value.length : 0;
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, "\n");
      }
      // remove any surrounding quotes and extra spaces
      value = value.replace(/(^['"]|['"]$)/g, "").trim();
      res[key] = value;
    }
  });
  return res;
}
