import { ajax } from "./ajax";
import {showErrorModal} from "@/api/tip";

/**
 * 文件上传 图片 word pdf等
 * @param url
 * @param dataObj
 * @param params 地址栏参数
 * @returns {Promise<unknown>}
 */
export const ajaxUpload = (url:string, dataObj = {}, params = {}) => {
  let formData = new FormData();
  // 遍历所有 参数对象
  Object.keys(dataObj).forEach((key:string) => {
    // @ts-ignore
    formData.append(key, dataObj[key]);
  });
  return new Promise((resolve, reject) => {
    ajax({
      url,
      method: "POST",
      data: formData,
      params,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          showErrorModal(response.message as string);
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
        showErrorModal("Upload Error");
      });
  });
};
