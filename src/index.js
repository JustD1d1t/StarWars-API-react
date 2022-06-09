import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./variables.scss";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

import Layout from "./layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>
);
