import React from "react";

const RemoteButton = React.lazy(() => import("app_c/Button"));

const App = () => (
  <React.Suspense fallback="Loading Remote Button...">
    <div>
      <h2>App B Content</h2>
      <RemoteButton />
    </div>
  </React.Suspense>
);

export default App;
