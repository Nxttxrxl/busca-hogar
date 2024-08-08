import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type Coordinates = [number, number];

const Mapa: React.FC = () => {
  
  const [polygonCoords] = useState<Coordinates[]>([
    [40.96548, -5.66443],
    [40.96527, -5.66338],
    [40.96451, -5.66373],
    [40.9647, -5.66468]
  ]);

  return (
    <div className='w-full mt-5 justify-center items-center'>
        <h1 className='text-4xl font-bold mb-2'>Mapa de refugios</h1>
    <MapContainer center={[40.965, -5.664]} zoom={5} style={{ height: '400px', width: '100%' }}>
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
