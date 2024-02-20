import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={Root} />
      </React.StrictMode>
      <ToastContainer />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </div>
);
