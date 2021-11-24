import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import ReduxProvider from "./core/store";
import ThemeProvider from "./core/theme";
import "./core/localization";

import App from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
