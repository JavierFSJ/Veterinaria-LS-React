import React from "react";

const Empty = () => {
  return (
    <div>
      <img
        src="../../public/admin.svg"
        alt="Icono de admin"
        className="w-1/2 mx-auto block"
      />
      <p className="mt-2 text-center text-2xl font-bold text-gray-300">
        ¡No hay <span className="text-indigo-200">Pacientes Disponibles</span>!
      </p>
    </div>
  );
};

export default Empty;
