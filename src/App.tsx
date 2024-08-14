import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Resultados from "./pages/Resultados";
import Colabora from "./pages/Colabora";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Authpage from "./pages/Authpage";
import Profile from "./pages/Profile";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex justify-center">
        <div className="w-[1200px]">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/colabora" element={<Colabora />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/authpage" element={<Authpage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </div>
      </div>
    </Router>
  );
};

export default App;
