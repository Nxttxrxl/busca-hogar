import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Filtros from "./components/Filtros";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Resultados from "./components/Resultados";
import Colabora from "./components/Colabora";
import Mapa from "./components/Mapa";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 items-center">
        <div className="w-[1200px] bg-white">
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/colabora" element={<Colabora />} />
            <Route path="/resultados" element={<Resultados />} />
          </Routes>

          <main className="flex flex-col items-center"> {/* Changed from flex-1 to flex-col */}
            <Filtros />
            <Mapa />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
