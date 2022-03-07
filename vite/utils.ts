import { deepClone } from "../src/utils/index";

export function parseEnv(env: Record<string, any>) {
  const envs = deepClone(env);
  Object.entries(env).forEach(([key, value]) => {
    // 判断是否是布尔
    if (value == "true" || value == "false") {
      envs[key] = value == "true" ? true : false;
    }

    // 判断是否是数字
    if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value);
    }
  });
  return envs;
}
