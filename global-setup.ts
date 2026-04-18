import type { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '.env');

export default async function globalSetup(_config: FullConfig) {
  const result = dotenv.config({ path: envPath });

  if (result.error?.code === 'ENOENT') {
    throw new Error(
      `Missing .env at ${envPath}. Copy .env.example to .env and set the required variables.`
    );
  }
  if (result.error) {
    throw result.error;
  }

  const required = ['BASE_URL', 'USER_NAME', 'USER_PASSWORD'] as const;
  const missing = required.filter((key) => !process.env[key]?.trim());

  if (missing.length) {
    throw new Error(
      `Missing or empty environment variables: ${missing.join(', ')}. Check ${envPath} or your CI env.`
    );
  }
}