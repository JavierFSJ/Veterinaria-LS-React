const Paciente = () => {
  return (
    <div className="bg-slate-200 py-5 px-3 rounded-lg my-5">
      <div className="my-3">
        <p className="text-slate-800 text-xl font-bold">
          Nombre: <span className=" text-slate-600">Hook</span>
        </p>
      </div>
      <div className="my-3">
        <p className="text-slate-800 text-xl font-bold">
          Propietario: <span className=" text-slate-600">Hook</span>
        </p>
      </div>
      <div className="my-3">
        <p className="text-slate-800 text-xl font-bold">
          Telefono: <span className=" text-slate-600">Hook</span>
        </p>
      </div>
      <div className="my-3">
        <p className="text-slate-800 text-xl font-bold">
          Email: <span className=" text-slate-600">Hook</span>
        </p>
      </div>
      <div className="my-3">
        <p className="text-slate-800 text-xl font-bold">
          Sintomas: <span className=" text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In fuga minima enim cupiditate quis eos perferendis aspernatur nam, porro incidunt omnis consequuntur dicta labore deleniti architecto quae dolorem itaque maxime?</span>
        </p>
      </div>
      <div className="flex justify-between">
        <button className=" bg-cyan-700 text-white my-3 text-center uppercase w-auto px-5 py-3 text-xl font-bold rounded-lg hover:bg-cyan-400 transition-colors cursor-pointer">Editar</button>
        <button className=" bg-red-700 text-white my-3 text-center uppercase w-auto px-5 py-3 text-xl font-bold rounded-lg hover:bg-red-400 transition-colors cursor-pointer">Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
