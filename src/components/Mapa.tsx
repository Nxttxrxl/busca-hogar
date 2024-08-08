import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type Coordinates = [number, number];

const Mapa: React.FC = () => {
  
  const [polygonCoords] = useState<Coordinates[]>([
    [41.141206, 1.046194],
    [41.143701, 1.042853],
    [41.141594, 1.042609],
    [41.141444, 1.044138]
  ]);

  return (
    <div className='w-full mt-5 justify-center items-center'>
        <h1 className='text-4xl font-bold mb-2'>Mapa de refugios</h1>
    <MapContainer center={[40.415347, -3.707371]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Polygon positions={polygonCoords} pathOptions={{ color: 'blue' }}>
        <Popup>
          <p>Refugio 1</p>
        </Popup>
      </Polygon>
    </MapContainer>
    </div>
  );
};

export default Mapa;
