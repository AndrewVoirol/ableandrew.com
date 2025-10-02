import { promises as fs } from 'fs';
import path from 'path';

const nextConfig = {
  experimental: {
    ppr: true,
  },
  async redirects() {
    try {
      const redirectsFile = await fs.readFile(path.join(process.cwd(), 'redirects.json'), 'utf8');
      const redirects = JSON.parse(redirectsFile);
      return redirects;
    } catch (error) {
      console.error('Could not read redirects.json', error);
      return [];
    }
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' cdn.vercel-insights.com vercel.live va.vercel-scripts.com;
    style-src 'self';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

export default nextConfig;