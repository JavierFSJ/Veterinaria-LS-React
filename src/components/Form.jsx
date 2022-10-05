const Form = () => {
  return (
    <div className="h-1/5 lg:w-2/5 bg-slate-700 p-5 rounded-lg">
      <div className="my-5 md:mt-10 md:mb-10">
        <h2 className="md:my-0 font-black text-3xl text-white text-center">
          Seguimiento de pacientes
        </h2>
        <p className="mt-2 text-center text-2xl font-bold text-gray-300">
          Añade tus <span className="text-indigo-200">Pacientes</span>
        </p>
      </div>
      <form className="px-5">
        <div className="text-white mb-5">
          <label htmlFor="nombre" className="block font-bold">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="nombre"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Nombre Mascota"
          />
        </div>
        <div className="text-white mb-5">
          <label htmlFor="propietario" className="block font-bold">
            Propietario
          </label>
          <input
            type="text"
            id="propietario"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Propietario Mascota"
          />
        </div>
        <div className="text-white mb-5">
          <label htmlFor="" className="block font-bold">
            Telefono
          </label>
          <input
            type="tel"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Telefono Propietario"
          />
        </div>
        <div className="text-white mb-5">
          <label htmlFor="" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Email Propietario"
          />
        </div>
        <div className="text-white mb-5">
          <label htmlFor="sintomas" className="block font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Describe los sintomas"
          ></textarea>
        </div>
        <input type="submit" value="agregar" className=" bg-cyan-700 text-white my-5 text-center uppercase w-full px-5 py-3 text-xl font-bold rounded-lg hover:bg-cyan-400 transition-colors cursor-pointer"/>
      </form>
    </div>
  );
};

export default Form;
