import { viteMockServe } from "vite-plugin-mock";

// 配置Mock 
export function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    mockPath: "mock",
    localEnabled: !isBuild
  });
}
