import { deepClone } from "../src/utils/index";

export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = deepClone(env);
  Object.entries(env).forEach(([key, value]) => {
    // 判断是否是布尔
    if (value == "true" || value == "false")
      envs[key] = value == "true" ? true : false;
    // 判断是否是数字
    else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value == "null") envs[key] = null;
    else if (value == "undefined") envs[key] = undefined;
  });
  return envs;
}
