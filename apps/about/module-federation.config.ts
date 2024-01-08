import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'about',
  library: { type: 'var', name: 'about' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
