import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filtros from './components/Filtros';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Resultados from './components/Resultados';

const App: React.FC = () => {
  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-gray-100 items-center">
      <div className='w-[1200px] bg-white'>

      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
      
      <main className="flex-grow flex-1 justify-center items-start">
        <Filtros />
      </main>

      <Footer />
    </div>
    </div>
    </Router>
  );
}

export default App;
