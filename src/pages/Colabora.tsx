import React from "react";
const Colabora: React.FC = () => {
  return (
    <div className="p-8 w-full rounded-lg mx-auto mt-10">
      {" "}
      <h2 className="text-3xl font-bold text-center text-black-600 mb-6">
        ¡Colabora con Nosotros!
      </h2>{" "}
      <p className="text-lg text-gray-700 mb-6 text-center">
        {" "}
        Tu ayuda es fundamental para continuar nuestro trabajo en los refugios
        de animales. Aquí te mostramos algunas formas en las que puedes
        colaborar.{" "}
      </p>{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {" "}
        {/* Donaciones */}{" "}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          {" "}
          <h3 className="text-xl font-semibold text-black-700 mb-4">
            Haz una Donación
          </h3>{" "}
          <p className="text-gray-600 mb-4">
            {" "}
            Con tu apoyo financiero, podemos ofrecer una mejor atención a los
            animales en nuestros refugios.{" "}
          </p>{" "}
          <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            {" "}
            Donar Ahora{" "}
          </button>{" "}
        </div>{" "}
        {/* Voluntariado */}{" "}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          {" "}
          <h3 className="text-xl font-semibold text-black-700 mb-4">
            Únete como Voluntario
          </h3>{" "}
          <p className="text-gray-600 mb-4">
            {" "}
            Tu tiempo es valioso. Ayúdanos directamente en los refugios como
            voluntario.{" "}
          </p>{" "}
          <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            {" "}
            Apuntarse{" "}
          </button>{" "}
        </div>{" "}
        {/* Compartir */}{" "}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          {" "}
          <h3 className="text-xl font-semibold text-black-700 mb-4">
            Comparte Nuestra Misión
          </h3>{" "}
          <p className="text-gray-600 mb-4">
            {" "}
            Ayúdanos a difundir nuestro trabajo compartiendo en tus redes
            sociales.{" "}
          </p>{" "}
          <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
            {" "}
            Compartir{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Colabora;
