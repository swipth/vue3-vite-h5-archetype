import { ajaxGet } from "./index";
//出库 状态是2 表示出库 1是待领用
export const receive = (orderId:string) => ajaxGet("/api/mall/outstock", { orderId });

