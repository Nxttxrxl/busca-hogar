import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const LogIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="w-full flex-box p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="flex mb-2 text-sm">Nombre de Usuario</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex mb-2 text-sm">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Iniciar Sesión
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/resetpassword" className="text-sm text-blue-600 hover:underline">
          ¿Perdiste tu contraseña?
        </Link>
      </div>
      <div className="mt-2 text-center">
        <span className="text-sm text-gray-600">¿No tienes cuenta? </span>
        <Link to="/register" className="text-sm text-blue-600 hover:underline">
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
