import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Hogar Animal</h2>
            <p className="text-sm mb-4">
              &copy; 2024 Hogar Animal. Todos los derechos reservados.
            </p>
            <p className="text-sm">
              Calle Ejemplo 123, Reus, Espanya
            </p>
            <p className="text-sm">
              Teléfono: +34 644 45 67 88
            </p>
            <p className="text-sm">
              Email: contacto@hogaranimal.com
            </p>
          </div>

          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Enlaces</h2>
            <ul>
              <li><a href="/" className="text-sm hover:underline">Inicio</a></li>
              <li><a href="/about" className="text-sm hover:underline">Sobre Nosotros</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contacto</a></li>
              <li><a href="/colabora" className="text-sm hover:underline">Colabora</a></li>
              <li><a href="/privacy" className="text-sm hover:underline">Política de Privacidad</a></li>
              <li><a href="/terms" className="text-sm hover:underline">Términos de Servicio</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex items-center justify-center md:justify-end">
            <a href="https://facebook.com" className="text-white hover:text-gray-400 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.8v-6.9H7.9v-2.8h2.6V10.7c0-2.6 1.6-4 4-4 1.1 0 2.2.1 3.2.3v3.6h-2.3c-1.3 0-1.5.6-1.5 1.5v2.1h2.7l-.4 2.8h-2.3v6.9c4.8-.7 8.5-4.8 8.5-9.8z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M23 3a10.7 10.7 0 0 1-3.1.9A4.9 4.9 0 0 0 22.4 2a10 10 0 0 1-3.1 1.2A4.8 4.8 0 0 0 16.6 4c-2.7 0-4.9 2.2-4.9 4.9 0 .4.1.8.1 1.2-4.1-.2-7.7-6.5-13.8-14.4-13.8-8.1 0-14.8 6.7-14.8 14.8 0 1.1.1 2.1.3 3.1A4.9 4.9 0 0 0 1.5 12c-.2-.2-.2-.3-.2-.5 0-.8.4-1.5 1.2-1.9A4.8 4.8 0 0 0 3 9.2c-.5-.2-1-.5-1.4-.8-.1.1-.1.3-.1.5 0 1.2.6 2.3 1.7 2.8-.6 0-1.1-.2-1.5-.5 0 1.7 1.2 3.2 2.8 3.5-.3.1-.6.2-.9.2-.2 0-.4 0-.6-.1.4 1.3 1.5 2.2 2.8 2.2-1.1.9-2.5 1.4-4 1.4-.3 0-.6 0-.9-.1 1.4.8 2.9 1.2 4.5 1.2 5.4 0 8.3-4.5 8.3-8.3v-.4c.6-.4 1.1-.8 1.5-1.3z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2.2C6.2 2.2 2 6.4 2 12c0 4.9 3.7 8.9 8.4 8.9 2.5 0 4.8-.9 6.7-2.4.5-.4.6-.9.3-1.4-.4-.5-1-.6-1.4-.3-1.6 1.3-3.6 2.1-5.6 2.1-4.2 0-7.7-3.4-7.7-7.7 0-4.2 3.4-7.7 7.7-7.7 1.4 0 2.7.3 3.8.8.5.3 1 .2 1.3-.3s.2-1 .3-1.4c.7-.5 1.5-.8 2.3-1 .4-.1.7-.2 1-.2 2.6 0 4.7 2.1 4.7 4.7 0 .3 0 .7-.2 1.1-1.2.7-2.4 1.3-3.6 1.9-.7.4-1.1 1.1-1.1 1.9 0 4.2-3.4 7.7-7.7 7.7zM22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10zm-5.5-2.2a1.4 1.4 0 1 0 0 2.7 1.4 1.4 0 0 0 0-2.7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

