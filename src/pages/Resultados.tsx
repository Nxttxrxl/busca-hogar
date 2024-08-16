import React from 'react';
//import { useLocation } from 'react-router-dom';
import Mapa from "../components/Mapa";
import AnimalCard from '../components/AnimalCard';

const Resultados: React.FC = () => {
 // const location = useLocation();
  //const { provincia, animal } = location.state as { provincia: string, animal: string };

 

  return (
    <div className="w-full flex flex-col items-center p-6">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-4">Resultados de la búsqueda</h1>
      </div>

      
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg mb-6">
      <AnimalCard petId={1} />
      </div>

      <Mapa />
    </div>
  );
};

export default Resultados;
