import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import router from "../router";
import { showNotify} from "vant";
import {translateTitle} from "@/locales";
import {getToken, getLanguage} from "@/config/clientStorage";
import {showErrorModal, showMessage} from "@/api/tip";
import {AjaxRes} from "@/types/common/apiResponse.ts";
import {networkKey} from "@/api/config/network.ts";

axios.defaults.baseURL = import.meta.env.VITE_BASE_API;
axios.defaults.timeout = 30000;
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (getToken()) {
      config.headers = {
        openId: getToken(),
        language: getLanguage()
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
// http响应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    switch (response.data.code) {
      case 403:
        showNotify({
          type: "warning",
          message: response.data.message,
          onClose: () => {
            router.replace("/403").then(() => {
            });
          },
        });
        break;
      case 500:
          showErrorModal(translateTitle("接口提醒"));
        break;
      default:
        if (response.data.success && response.data.data === null)
          showMessage(response.data.message || translateTitle("操作成功"),"success");
        break;
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 500) {
      showErrorModal("Interface Error",);
    } else if (error.response && error.response.status === 400) {
      showErrorModal("Interface Error",);
    } else if (error.response && error.response.status === 404) {
      showErrorModal("Interface Url 404",);
    } else if (error.response && error.response.status === 403) {
      showErrorModal("Interface 403",);
    } else if (error.response && error.response.status === 401) {
      // refresh_token 过期需要重新授权
      router.replace("/index").then(() => {
      });
    }
    return Promise.reject(error);
  }
);
export const ajax = ({url = "", method = "GET", params = {}, data = {}, baseURL, headers, responseType}:AxiosRequestConfig): Promise<AjaxRes> => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: method.toLowerCase(),
      params,
      baseURL,
      headers,
      data,
      withCredentials: true,
      auth: networkKey.auth,
      responseType, // default json  options are: 'arraybuffer', 'document', 'json', 'text', 'stream'  browser only: 'blob'
      validateStatus: function (status: number) {
        return status >= 200 && status < 300; // default
      },
    })
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        // 错误信息reject出去 在catch中接受
        reject(error.response);
      });
  });
};
