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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
            <path d="M12 7.7c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.8v-6.9H7.9v-2.8h2.6V10.7c0-2.6 1.6-4 4-4 1.1 0 2.2.1 3.2.3v3.6h-2.3c-1.3 0-1.5.6-1.5 1.5v2.1h2.7l-.4 2.8h-2.3v6.9c4.8-.7 8.5-4.8 8.5-9.8z"></path>
          </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

