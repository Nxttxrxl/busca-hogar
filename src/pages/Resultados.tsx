import React from 'react';
import { useLocation } from 'react-router-dom';
import Mapa from "../components/Mapa";

const Resultados: React.FC = () => {
  const location = useLocation();
  const { provincia, animal } = location.state as { provincia: string, animal: string };

  // Ejemplo de datos del animal (estos podrían venir de una API o de otra fuente)
  const animalData = {
    photoUrl: 'https://via.placeholder.com/150', 
    species: 'Perro', // Especie del animal
    breed: 'Labrador', // Raza del animal
    age: '3 años', // Edad del animal
    description: 'Es un perro amistoso y enérgico que disfruta de jugar y correr al aire libre.', // Descripción breve
  };

  return (
    <div className="w-full flex flex-col items-center p-6">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-4">Resultados de la búsqueda</h1>
      </div>

      {/* Tarjeta del Animal */}
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg mb-6">
        <div className="flex items-center space-x-6">
          <img
            src={animalData.photoUrl}
            alt="Animal"
            className="w-32 h-32 object-cover rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">{animalData.species}</h2>
            <p className="text-lg mb-1"><strong>Raza:</strong> {animalData.breed}</p>
            <p className="text-lg mb-1"><strong>Edad:</strong> {animalData.age}</p>
            <p className="text-sm">{animalData.description}</p>
          </div>
        </div>
      </div>

      <Mapa />
    </div>
  );
};

export default Resultados;
