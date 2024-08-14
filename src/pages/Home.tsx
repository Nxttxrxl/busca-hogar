import React from 'react';
import Filtros from '../components/Filtros';
import AdoptionTips from '../components/AdoptionTips';

const Home: React.FC = () => {
  return (
    
    <main className="flex flex-col items-center"> 
        <Filtros />
        <AdoptionTips />
    </main>
    
  );
};

export default Home;