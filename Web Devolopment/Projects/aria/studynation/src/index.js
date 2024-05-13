import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./static/css/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./static/js/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </Provider>
    <Analytics/>
  </React.StrictMode>
);


