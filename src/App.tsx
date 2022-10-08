import { AuthenticatedApp } from "authenticated-app"
import { ErrorBoundary } from "components/error-boundary"
import { FullPageError } from "components/lib"
import { useAuth } from "context/auth-context"
// import React from "react";
// import { Loginscreen } from 'screens/login';
import { UnauthenticatedApp } from "unauthenticated-app"
// import { TsReactTest } from "./screens/project-list/try-use-array";

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TsReactTest /> */}
      {/* <Loginscreen /> */}
      <ErrorBoundary fullbackRender={FullPageError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  )
}

export default App
