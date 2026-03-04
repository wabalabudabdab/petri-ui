import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  turbopack: {
    resolveAlias: {
      '@wabalabudabdab/petri-ui': '../src/index.ts',
    },
  },
  webpack: (config) => {
    const path = require('path');
    config.resolve.alias['@wabalabudabdab/petri-ui'] = path.resolve(
      process.cwd(),
      '../src/index.ts',
    );
    return config;
  },
};

export default nextConfig;
