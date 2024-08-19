import React from 'react';
import Mapa from '../components/Mapa';



const Centers: React.FC = () => {
  

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow">
        <div className="flex-grow p-4">
          <Mapa />
          <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Centros Disponibles</h2>
     
    </div>
        </div>
      </div>
     
    </div>
  );
};

export default Centers;
