import React from "react";
import { router } from "@/router/router";
import { RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

import "@/assets/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
