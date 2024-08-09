import React from 'react';
import { useLocation } from 'react-router-dom';
import Mapa from "../components/Mapa";

const Resultados: React.FC = () => {
  const location = useLocation();
  const { provincia, animal } = location.state as { provincia: string, animal: string };

 

  return (
    <div className="flex-box justify-center items-center w-full p-6">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Resultados de la búsqueda</h1>
        <p><strong>Provincia:</strong> {provincia}</p>
        <p><strong>Animal:</strong> {animal}</p>
      </div>
      <Mapa />
    </div>
  );
};

export default Resultados;
