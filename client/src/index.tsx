import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import reportWebVitals from "reportWebVitals";
import App from "App";
import { store } from "redux/store";
import "index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <GoogleOAuthProvider clientId="378256996686-fr9b6o30h7v9b7e9q502n9iat03eaitm.apps.googleusercontent.com">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
