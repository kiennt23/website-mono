import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
// TODO: check how nx is doing this
// eslint-disable-next-line @nx/enforce-module-boundaries
import RemoteModule from "../../../../libs/mf/remote";

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/shop" element={
          <RemoteModule system={{
            url: "http://localhost:4201",
            scope: "shop",
            module: "Module"
          }}
          />
        }
        />

        <Route path="/cart" element={
          <RemoteModule system={{
            url: "http://localhost:4202",
            scope: "cart",
            module: "Module"
          }}
          />
        }
        />

        <Route path="/about" element={
          <RemoteModule system={{
            url: "http://localhost:4203",
            scope: "about",
            module: "Module"
          }}
          />
        }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
