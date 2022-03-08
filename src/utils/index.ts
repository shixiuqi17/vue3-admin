// 以/分割的字符串定义成驼峰
export function toHumpName(str: string) {
  let reg = /-(\w)/g; // \w匹配所有的字母和数字字符以及下划线_
  return str.replace(reg, function ($0, $1) {
    // 第一个参数re表示正则,第二个回调函数,对该字符串处理方式,圆括号内的形参数表示正则表达式的子选项
    return $1.toUpperCase(); // 转大写
  });
}
