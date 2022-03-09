interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: string;
  VITE_API_URL: string;
}

interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
