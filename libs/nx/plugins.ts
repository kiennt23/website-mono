import { Configuration } from 'webpack';
import { WithNxOptions } from "@nx/webpack/src/utils/with-nx";
import { NxComposableWebpackPlugin } from "@nx/webpack/src/utils/config";

export const withDynamicModuleFederation = () => {
  return (config: Configuration): Configuration => {
    return {
      ...config,
      experiments: { outputModule: false },
      output: {
        ...config.output,
        scriptType: 'text/javascript'
      }
    };
  }
}

export const withFallback: (pluginOptions?: WithNxOptions) => NxComposableWebpackPlugin = () => {
  return (config, context) => {
    const resolve = {
      ...config.resolve,
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
    return {
      ...config,
      resolve
    };
  }
}

export const withProfiling = () => {
  return (config: Configuration) => {
    return {
      ...config,
      profile: true,
      resolve: {
        ...config?.resolve,
        alias: {
          ...config?.resolve?.alias,
          'react-dom$': 'react-dom/profiling'
        }
      }
    }
  }
}

export const withDisableSplitChunks = () => {
  return (config, context) => {
    const optimization = {
      ...config.optimization,
      splitChunks: false,
    };

    return {
      ...config,
      optimization,
    }
  }
}
