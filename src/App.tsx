import { AuthenticatedApp } from 'authenticated-app';
import { useAuth } from 'context/auth-context';
// import React from "react";
// import { Loginscreen } from 'screens/login';
import { UnauthenticatedApp } from 'unauthenticated-app';
// import { TsReactTest } from "./screens/project-list/try-use-array";

function App() {
    const { user } = useAuth()
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TsReactTest /> */}
      {/* <Loginscreen /> */}
        { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </div>
  );
}

export default App;
