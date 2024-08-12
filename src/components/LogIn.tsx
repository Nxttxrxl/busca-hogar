import React, { useState } from "react";

const LogIn: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      console.log({ username, password });
    };
  
    return (
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Nombre de Usuario</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Contraseña</label>
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
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    );
  };

export default LogIn;