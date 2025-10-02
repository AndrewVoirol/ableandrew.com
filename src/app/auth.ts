import { betterAuth } from 'better-auth';
import { Pool } from 'pg';

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.POSTGRES_URL,
  }),
  socialProviders: {
    github: {
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    },
  },
  session: {
    fields: {
      expiresAt: 'expires', // Map `expires` to `expiresAt`
      token: 'sessionToken', // Map `sessionToken` to `token`
    },
  },
  account: {
    fields: {
      providerId: 'provider', // Map `provider` to `providerId`
      accountId: 'providerAccountId',
      refreshToken: 'refresh_token',
      accessToken: 'access_token',
      accessTokenExpiresAt: 'expires_at',
      idToken: 'id_token',
    },
  },
  pages: {
    signIn: '/sign-in',
  },
});