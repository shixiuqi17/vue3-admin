// 以/分割的字符串定义成驼
export function toHumpName(str: string) {
  let reg = /-(\w)/g; // \w匹配所有的字母和数字字符以及下划线_
  return str.replace(reg, function ($0, $1) {
    // 第一个参数re表示正则,第二个回调函数,对该字符串处理方式,圆括号内的形参数表示正则表达式的子选项
    return $1.toUpperCase(); // 转大写
  });
}

// 深拷贝
export function deepClone(obj: object | any): object | null {
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

// 拼接跳转路由路径
export function handleRouteLink(routePath: string, routeChildPath: string) {
  if (routePath === "" || /^\//.test(routeChildPath)) {
    return routeChildPath;
  }

  if (routeChildPath === "") {
    return routePath;
  }

  return `${routePath}/${routeChildPath}`;
}
