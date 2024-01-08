import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  // withDisableSplitChunks,
  withDynamicModuleFederation,
  withFallback, withProfiling
} from '../../libs/nx/plugins';

const config = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  // withDisableSplitChunks(),
  withProfiling(),
  withFallback(),
  withNx({
    deleteOutputPath: true,
    progress: true,
  }),
  withReact(),
  withModuleFederation(config),
  withDynamicModuleFederation()
);
