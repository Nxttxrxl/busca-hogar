import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Resultados from "./pages/Resultados";
import Colabora from "./pages/Colabora";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";
import Register from "./components/Register";
import LogIn from "./pages/LogIn";
import ResetPassword from "./components/ResetPassword";
import Centers from "./pages/Centers";
import SearchResults from "./pages/SearchResults";
import Privacity from "./pages/Privacity";
import Terms from "./pages/Terms";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      <div className="flex justify-center">
        <div className="w-[1200px]">
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/colabora" element={<Colabora />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/centers" element={<Centers />} />
              <Route path="/privacity" element={<Privacity />} />
              <Route path="terms" element={<Terms />} />
            </Routes>
          
        </div>
      </div>
      </Layout>
    </Router>
  );
};

export default App;
