import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Estado inicial

  const handleSearch = (query: string) => {
    navigate(`/search?q=${query}`);
  };

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Simulación de autenticación; debería reemplazarse con lógica real
  useEffect(() => {
    const userAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(userAuthenticated);
  }, []);

  return (
    <header
      className={`text-black p-4 flex justify-between items-center transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-white shadow-md`}
    >
      <div className="flex items-center space-x-4">
        <Link to="/" className="block items-center">
          <img src="./images/Logo.png" alt="Logo" className="h-9" />
        </Link>
      </div>

      <nav className="flex space-x-8">
        <Link to="/centers" className="text-lg text-gray-700 hover:text-gray-900">
          Refugios y Protectoras
        </Link>
        <Link to="/about" className="text-lg text-gray-700 hover:text-gray-900">
          Sobre Nosotros
        </Link>
        <Link to="/colabora" className="text-lg text-gray-700 hover:text-gray-900">
          Contacto
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <SearchBar onSearch={handleSearch} />
        {!isAuthenticated ? (
          <Link
            to="/login"
            className="p-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-800"
          >
            Log In
          </Link>
        ) : (
          <Link to="/profile" className="p-2 text-gray-700 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM12 14c-4.4 0-8 2.6-8 6v1h16v-1c0-3.4-3.6-6-8-6z"></path>
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
