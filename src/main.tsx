import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./config/i18n";
import CircularProgress from "./shared/circular-progress";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={
      <div className="h-screen grid place-items-center">
        <CircularProgress size={48}/>


      </div>
    }>
      <App />
    </Suspense>
  </React.StrictMode>
);
