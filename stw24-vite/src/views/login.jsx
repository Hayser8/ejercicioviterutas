import React, { useState } from "react";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginStatus("Por favor ingresa un correo electrónico y contraseña.");
      return;
    }

    console.log("Datos del formulario:", { email, password });
    setLoginStatus("Iniciando sesión...");

    setTimeout(() => {
      setLoginStatus("Inicio de sesión exitoso!");
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className="login-view">
      <div className="form-container">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Ingresar</button>
        </form>
        {loginStatus && <p className="status-message">{loginStatus}</p>}
      </div>
    </div>
  );
}

export default Login;
