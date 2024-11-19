import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);

import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { Routes } from "react-router-dom";
const App1 = () => (
  <KindeProvider
    clientId="d708deb2bb034b6d9cd7931f708f81ad"
    domain="https://todoapptsx.kinde.com"
    redirectUri="http://localhost:3000"
    logoutUri="http://localhost:3000"
  >
    <Routes />
  </KindeProvider>
);
