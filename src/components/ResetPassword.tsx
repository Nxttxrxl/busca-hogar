import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de restablecimiento de contraseña.');
      }

      const data = await response.json();
      setMessage(data.message || 'Se ha enviado un enlace para restablecer tu contraseña al correo electrónico proporcionado.');
    } catch (err) {
      setError('Hubo un problema al enviar el enlace de restablecimiento. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="w-full flex-box p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="flex mb-2 text-sm">Correo Electrónico</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Enviar Enlace de Restablecimiento
        </button>
      </form>
      {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      <div className="mt-4 text-center">
        <Link to="/login" className="text-sm text-blue-600 hover:underline">
          Regresar al inicio de sesión
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
