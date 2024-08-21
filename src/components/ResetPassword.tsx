import React, { useState } from 'react';

const ResetPassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      // Obtener el token de autenticación
      const tokenResponse = await fetch("http://localhost:8080/api/auth/token", {
        method: "GET",
      });

      if (!tokenResponse.ok) {
        throw new Error("Error al obtener el token");
      }

      const token = await tokenResponse.text();

      // Obtener el userId desde localStorage
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const userId = userData.userId;

      if (!userId) {
        throw new Error("Usuario no autenticado");
      }

      // Enviar solicitud para cambiar la contraseña
      const response = await fetch('http://localhost:8080/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, oldPassword, newPassword }),
      });

      if (!response.ok) {
        throw new Error('Error al cambiar la contraseña.');
      }

      const data = await response.text();
      setMessage(data || 'Contraseña actualizada con éxito.');
    } catch (err) {
      setError('Error al cambiar la contraseña.');
    }
  };

  return (
    <div className="w-1/2 flex-box p-8 shadow-md rounded-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Cambia tu Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="flex mb-2 text-sm">Contraseña Actual</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex mb-2 text-sm">Nueva Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex mb-2 text-sm">Confirmar Nueva Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Cambiar Contraseña
        </button>
      </form>
      {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
    </div>
  );
};

export default ResetPassword;
