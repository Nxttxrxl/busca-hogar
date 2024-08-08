import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header className="text-black p-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold mb-2">Hogar Animal</h1>
        <div className="flex space-x-2">
          <Link to="/" className="text-sm hover:text-gray-500">Inicio</Link>
          <Link to="/about" className="text-sm hover:text-gray-500">Sobre Nosotros</Link>
          <a href="#services" className="text-sm hover:text-gray-500">Colabora</a>
          <a href="#contact" className="text-sm hover:text-gray-500">Contacto</a>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        
        <form onSubmit={handleSearch} className="flex items-center space-x-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-1 text-sm border border-gray-300 rounded-lg"
            placeholder="Buscar..."
          />
          <button type="submit" className="p-1 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>

        <div className="flex space-x-2">
          <Link
            to="/signin"
            className="p-1 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
           Log In
          </Link>
          <Link
            to="/signup"
            className="p-1 text-xs bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
