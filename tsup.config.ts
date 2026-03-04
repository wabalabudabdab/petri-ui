import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/components/*.tsx',
    'src/hooks/*.ts',
    'src/lib/*.ts',
  ],
  format: ['esm'],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  banner: { js: '"use client";' },
});
