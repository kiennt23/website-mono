import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shop',
  library: { type: 'var', name: 'shop' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (libraryName, sharedConfig) => {
    return {
      singleton: true,
    };
  }
};

export default config;
