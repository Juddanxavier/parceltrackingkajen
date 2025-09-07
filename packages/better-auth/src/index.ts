/** @format */

import { betterAuth } from 'better-auth';

const AUTH_SECRET = process.env.AUTH_SECRET;
const IS_PROD = process.env.NODE_ENV === 'production';
if (!AUTH_SECRET) {
  throw new Error('AUTH_SECRET is required');
}

export const auth = betterAuth({
  secret: AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    useSecureCookies: IS_PROD,
  },
});

export * from 'better-auth';
