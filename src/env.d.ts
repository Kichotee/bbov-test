/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_HRMS_PAYROLL_BASE_URL: string;
  readonly VITE_HRMS_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export interface IAll {
  help: ImportMeta;
}
