/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_BASE_API: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_MONITOR_API: string;
  readonly VITE_OUT_PUT_NAME: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
