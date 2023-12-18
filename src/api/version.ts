// 获取版本信息
import {ajax} from "@/api/ajax";

export const checkVersion = () => ajax({ url: "/static/version.json", baseURL: "/" });
import pkg from "../../package.json";
import {AjaxRes} from "@/types/common/apiResponse.ts";
/**
 * 版本检测
 */
export function versionCheck() {
  checkVersion().then((res:AjaxRes) => {
    if (res.success) {
      if (" V" + pkg.version !== res.data.version) {
        refreshPage();
      }
    }
  });
}

// 刷新当前页面
function refreshPage() {
  const url = new URL(location.href);
  if (url.searchParams.get("t")) location.reload();
  else url.searchParams.append("t", String(Date.now()));
  location.href = url.href;
}
