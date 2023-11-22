import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";

// browser router ini meng-import router dom yang telah saya install
// sama seperti mengimport ReactDOM
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("roots")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
