import React from "react";
import Home from "../views/home";
import Login from "../views/login";

function Router({ route, onLoginSuccess }) {
  switch (route) {
    case "/home":
      return <Home />;
    case "/login":
      return <Login onLoginSuccess={onLoginSuccess} />;
    default:
      return <Home />;
  }
}

export default Router;
