import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import AnimalCard, { Pet } from './AnimalCard';
import petData from '../JSON/pet.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Destacados: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    // Cargar los datos desde pet.json
    setPets(petData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Muestra 3 tarjetas al mismo tiempo
    slidesToScroll: 1, // Desliza una tarjeta a la vez
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full mt-6">
      <Slider {...settings}>
        {pets.map((pet) => (
          <div key={pet.pet_id} className="px-2">
            <AnimalCard pet={pet} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Destacados;
