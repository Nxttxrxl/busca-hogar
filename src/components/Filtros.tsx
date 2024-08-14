// components/Filtros.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AutoComplete from './AutoComplete';

const Filtros: React.FC = () => {
  const [provincia, setProvincia] = useState('');
  const [animal, setAnimal] = useState('');
  const navigate = useNavigate();

  const provincias = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila',
    'Badajoz', 'Baleares', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz',
    'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca',
    'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca',
    'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida',
    'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia',
    'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia',
    'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia',
    'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
  ];

  const animales = [
    'Perro', 'Gato', 'Ave', 'Caballo', 'Otro'
  ];

  const handleSearch = () => {
    navigate('/resultados', {
      state: { provincia, animal }
    });
  };

  return (
    <div className="background-image flex justify-center items-start w-full">
      <div className="flex justify-center items-center w-3/4 mt-12">
        <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
          <div className="flex flex-col space-y-6 mb-6">
            <div className="flex-1">
              <label className="block mb-2 text-lg text-gray-700">Provincia:</label>
              <AutoComplete
                options={provincias}
                value={provincia}
                onChange={setProvincia}
                onSelect={setProvincia}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-lg text-gray-700">Animal:</label>
              <AutoComplete
                options={animales}
                value={animal}
                onChange={setAnimal}
                onSelect={setAnimal}
              />
            </div>
          </div>
          <button
            className="bg-gray-700 text-white p-3 w-full rounded-lg hover:bg-gray-800"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filtros;
