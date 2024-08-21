// src/components/AnimalCard.tsx
import React from 'react';

export interface Pet {
  pet_id: number;
  center_id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  description: string;
  photo_url: string;
  available: boolean;
  created_at: string;
}

const AnimalCard: React.FC<{ pet: Pet }> = ({ pet }) => {
  return (
    <div className="max-w-sm h-[450px] rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={pet.photo_url}
        alt={`Photo of ${pet.name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pet.name}</div>
        <p className="text-gray-700 text-base">{pet.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {pet.species}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {pet.breed}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {pet.age} años
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {pet.gender}
        </span>
        {pet.available && (
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
            Disponible
          </span>
        )}
      </div>
    </div>
  );
};

export default AnimalCard;
