// 以/分割的字符串定义成驼峰
function toHumpName(str: string) {
  var re = /-(\w)/g; // \w匹配所有的字母和数字字符以及下划线_
  return str.replace(re, function ($0, $1) {
    // 第一个参数re表示正则,第二个回调函数,对该字符串处理方式,圆括号内的形参数表示正则表达式的子选项
    return $1.toUpperCase(); // 转大写
  });
}

// 深拷贝
function deepClone(obj: object | any): object | null {
  if (obj === null) return null;

  if (typeof obj !== "object") return obj;

  if (obj instanceof RegExp) return new RegExp(obj);

  if (obj instanceof Date) return new Date(obj);

  let result = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
export { toHumpName, deepClone };
