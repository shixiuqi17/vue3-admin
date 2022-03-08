interface ViteEnv {
  VITE_SOME_KEY: number;
  VITE_API_URL: string;
  VITE_TEST: boolean;
}

interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
