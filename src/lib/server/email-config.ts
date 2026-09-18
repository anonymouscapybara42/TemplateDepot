export interface EmailConfig {
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPass: string;
  inquiryToEmail: string;
}

type EmailEnvName =
  | 'SMTP_HOST'
  | 'SMTP_PORT'
  | 'SMTP_USER'
  | 'SMTP_PASS'
  | 'INQUIRY_TO_EMAIL';

function requiredEnv(name: EmailEnvName): string {
  // Astro exposes local .env values through import.meta.env. Hostinger
  // supplies production values to the Node process through process.env.
  const value = (import.meta.env[name] ?? process.env[name])?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getEmailConfig(): EmailConfig {
  const smtpPortValue = requiredEnv('SMTP_PORT');
  const smtpPort = Number(smtpPortValue);

  if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    throw new Error('SMTP_PORT must be an integer between 1 and 65535');
  }

  return {
    smtpHost: requiredEnv('SMTP_HOST'),
    smtpPort,
    smtpUser: requiredEnv('SMTP_USER'),
    smtpPass: requiredEnv('SMTP_PASS'),
    inquiryToEmail: requiredEnv('INQUIRY_TO_EMAIL'),
  };
}
