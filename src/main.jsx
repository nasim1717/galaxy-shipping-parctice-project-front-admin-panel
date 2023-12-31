import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routers";
import store from "./app/store";
import AuthProvider from "./provider/AuthProvider";
import Modal from "react-modal";
import { HelmetProvider } from "react-helmet-async";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
