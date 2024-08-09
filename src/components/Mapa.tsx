import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; 


type Coordinates = [number, number];

const Mapa: React.FC = () => {
  
  const pointCoords: Coordinates = [41.141206, 1.046194];

  const markerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34] 
  });

  return (
    <div className='w-full mt-5 justify-center items-center'>
      <h1 className='text-4xl font-bold mb-2'>Mapa de refugios</h1>
      <MapContainer center={pointCoords} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={pointCoords} icon={markerIcon}>
          <Popup>
            <p>Refugi Baix Camp</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;
