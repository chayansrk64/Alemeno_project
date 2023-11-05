import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import router from "./routes/router.jsx";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
    
  </React.StrictMode>
);
