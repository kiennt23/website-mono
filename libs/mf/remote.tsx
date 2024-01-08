// @ts-ignore
import React, { Suspense } from "react";
import ErrorBoundary from "./error";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { importRemote } from '@module-federation/utilities';

export type RemoteModuleProps = {
  system: {
    url?: string;
    scope?: string;
    module?: string;
  }
}

function RemoteModule(props: RemoteModuleProps) {
  const {
    system,
    system: { url, scope, module },
    ...rest
  } = props;

  if (!system || !url || !scope || !module) {
    return <h2>No system specified</h2>;
  }

  // @ts-ignore
  const Component = React.lazy(() =>
    importRemote({
      url,
      scope,
      module,
      bustRemoteEntryCache: false
    })
  );

  return (
    <ErrorBoundary fallback={<>Error loading...</>}>
      <Suspense fallback={<></>}>
        <Component {...rest} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default RemoteModule;
