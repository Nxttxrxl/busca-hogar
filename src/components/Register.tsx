import React, { useState } from "react";


const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("user");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password, accountType });
  };

  return (
    <div className="bg-white p-8 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      <form onSubmit={handleRegister}>
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
          <label className="block mb-2 text-sm">Correo Electrónico</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="mb-4">
          <label className="block mb-2 text-sm">Confirmar Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Tipo de Cuenta</label>
          <select
            className="w-full p-2 border rounded"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            required
          >
            <option value="user">Persona que Adopta</option>
            <option value="shelter">Refugio</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;