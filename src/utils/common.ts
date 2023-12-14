/**
 * 将首字母转成大写
 * @param str
 * @returns {string}
 */
export function capitalizeFirstLetter(str:string):string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
