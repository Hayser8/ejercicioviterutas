import React, { useState, useEffect } from "react";
import "./App.css";
import Router from "./components/router";
import Navigation from "./components/Navigation";

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleRouteChange = (newRoute) => {
    window.history.pushState({}, "", newRoute);
    setRoute(newRoute);
  };

  return (
    <div className="app-container">
      <Navigation onRouteChange={handleRouteChange} />
      <div className="router-container">
        <Router
          route={route}
          onLoginSuccess={() => handleRouteChange("/home")}
        />
      </div>
    </div>
  );
}

export default App;
