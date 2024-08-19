import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Coordinates = [number, number];

const Mapa: React.FC = () => {
  const [userPosition, setUserPosition] = useState<Coordinates | null>(null);

  // Ícono personalizado para la ubicación del usuario
  const userIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconSize: [30, 46],
    iconAnchor: [15, 46],
    popupAnchor: [0, -46],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
  });

  // Ícono personalizado para los refugios
  const shelterIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition([latitude, longitude] as Coordinates);
        },
        (error) => {
          console.error('Error buscando la ubicación', error);
          // Maneja errores aquí, como mostrar un mensaje al usuario
        }
      );
    }
  }, []);

  return (
    <div className='w-full mt-5 justify-center items-center'>
      <MapContainer
        center={userPosition || [41.141206, 1.046194]} // Usa la ubicación del usuario si está disponible
        zoom={userPosition ? 13 : 10} // Ajusta el zoom en base a si se tiene la ubicación del usuario
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
        {/* Marcador para los refugios */}
        <Marker position={[41.141206, 1.046194]} icon={shelterIcon}>
          <Popup>
            <p>Refugi Baix Camp</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;

