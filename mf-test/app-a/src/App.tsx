import React, { Suspense } from "react";
// @ts-ignore: 타입 에러 무시
import { appB } from "app-b";

console.log(appB.AppB);

const App = () => (
  <Suspense fallback="Loading...">
    <div>
      <h1>App A</h1>
      <appB.AppB />
    </div>
  </Suspense>
);

export default App;
