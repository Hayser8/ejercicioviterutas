import React from "react";

function Navigation({ onRouteChange }) {
  return (
    <nav className="navigation">
      <button onClick={() => onRouteChange("/home")}>Home</button>
      <button onClick={() => onRouteChange("/login")}>Login</button>
    </nav>
  );
}

export default Navigation;
