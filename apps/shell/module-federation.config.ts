import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  library: { type: 'var', name: 'shell' },
  shared: (libraryName, sharedConfig) => {
    return {
      singleton: true,
    }
  }
};

export default config;
