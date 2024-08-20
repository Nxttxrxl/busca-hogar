import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Coordinates = [number, number];

const Mapa: React.FC = () => {
  const [userPosition, setUserPosition] = useState<Coordinates | null>(null);

  const userIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconSize: [30, 46],
    iconAnchor: [15, 46],
    popupAnchor: [0, -46],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
  });

  const shelterIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Array actualizado con más detalles
  const shelters = [
    { name: 'Refugi Baix Camp', position: [41.141206, 1.046194] as Coordinates, city: 'Reus', imageUrl: 'https://example.com/image1.jpg', website: 'https://example.com', email: 'info@example.com', phone: '123-456-789' },
    { name: 'Refugi de Barcelona', position: [41.3874, 2.1686] as Coordinates, city: 'Barcelona', imageUrl: 'https://example.com/image2.jpg', website: 'https://example.com', email: 'info@example.com', phone: '123-456-789' },
    // Añade más refugios aquí
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude] as Coordinates);
        },
        (error) => {
          console.error('Error buscando la ubicación', error);
        }
      );
    }
  }, []);

  return (
    <div className='w-full mt-5 justify-center items-center'>
      <MapContainer
        center={userPosition || [40.4168, -3.7038]} // Madrid como centro si no hay ubicación del usuario
        zoom={userPosition ? 13 : 6} // Ajuste de zoom
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {userPosition && (
          <Marker position={userPosition} icon={userIcon}>
            <Popup>
              <p>Tu ubicación actual</p>
            </Popup>
          </Marker>
        )}
        {shelters.map((shelter, index) => (
          <Marker key={index} position={shelter.position} icon={shelterIcon}>
            <Popup>
              <div style={{ width: '200px' }}>
                <img src={shelter.imageUrl} alt={shelter.name} style={{ width: '100%', height: 'auto' }} />
                <h3>{shelter.name}</h3>
                <p><strong>Ciudad:</strong> {shelter.city}</p>
                <p><strong>Website:</strong> <a href={shelter.website} target="_blank" rel="noopener noreferrer">{shelter.website}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${shelter.email}`}>{shelter.email}</a></p>
                <p><strong>Teléfono:</strong> {shelter.phone}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;











