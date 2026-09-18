/// <reference path="../.astro/types.d.ts" />

declare namespace NodeJS {
  interface ProcessEnv {
    SMTP_HOST?: string;
    SMTP_PORT?: string;
    SMTP_USER?: string;
    SMTP_PASS?: string;
    INQUIRY_TO_EMAIL?: string;
  }
}

interface ImportMetaEnv {
  readonly SMTP_HOST?: string;
  readonly SMTP_PORT?: string;
  readonly SMTP_USER?: string;
  readonly SMTP_PASS?: string;
  readonly INQUIRY_TO_EMAIL?: string;
}