import { ajax } from "../ajax.ts";
import { paramsSerialize } from "../serialize.ts";
import {networkKey} from "../config/network.ts";

export const ajaxGet = (url:string, params={}) => ajax({ baseURL: import.meta.env.VUE_APP_CONFERENCE_API, method: "GET", url, params });

export const ajaxDelete = (url:string, params={},data={}) => ajax({ baseURL: import.meta.env.VUE_APP_CONFERENCE_API, method: "DELETE", url, params ,data});

export const ajaxPost = (url:string, data={}, paramsSerialization = false, params={}) =>
  ajax({
    baseURL: import.meta.env.VUE_APP_CONFERENCE_API,
    method: "POST",
    url,
    params,
    data: paramsSerialize(paramsSerialization, data),
    headers: {
      "Content-Type": paramsSerialization ? networkKey.contentType : networkKey.contentJsonType,
    },
  });

export const ajaxPut = (url:string, data={}, paramsSerialization=false,params={}) =>
  ajax({
    baseURL: import.meta.env.VUE_APP_CONFERENCE_API,
    method: "PUT",
    url,
    data: paramsSerialize(paramsSerialization, data),
    params,
    headers: {
      "Content-Type": paramsSerialization ? networkKey.contentType : networkKey.contentJsonType,
    },
  });

export const ajaxPatch = (url:string, data={}, paramsSerialization=false,params={}) =>
  ajax({
    baseURL: import.meta.env.VUE_APP_CONFERENCE_API,
    method: "PATCH",
    url,
    data: paramsSerialize(paramsSerialization, data),
    params,
    headers: {
      "Content-Type": paramsSerialization ? networkKey.contentType : networkKey.contentJsonType,
    },
  });
