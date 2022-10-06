import { useState } from "react";
import Alerta from "./Alerta";

const Form = ({setPacientes , pacientes}) => {
  const [paciente, setPaciente] = useState({
    nombre: "",
    telefono: "",
    email: "",
    sintomas: "",
    propietario: "",
    fecha: "",
  });
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, propietario, telefono, email, sintomas, fecha, } = paciente;
    if ([nombre, propietario, telefono, email, sintomas ,fecha].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 3000);
      return;
    }
    
    setPacientes([ paciente , ...pacientes]);
    setPaciente({
      nombre: "",
      telefono: "",
      email: "",
      sintomas: "",
      propietario: "",
      fecha: "",
    });

    setAlerta({
      msg: 'Paciente Agregado correctamente',
    })

    setTimeout(() => {
      setAlerta({});
    }, 3000);
  };

  const { msg } = alerta;
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
      <form className="px-5" onSubmit={handleSubmit}>
        {msg && <Alerta alerta={alerta} />}
        <div className="text-white mb-5">
          <label htmlFor="nombre" className="block font-bold">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="nombre"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Nombre Mascota"
            name="nombre"
            onChange={(e) =>
              setPaciente({
                ...paciente,
                [e.target.name]: e.target.value,
              })
            }
            value={paciente.nombre || ""}
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
            name="propietario"
            onChange={(e) =>
              setPaciente({
                ...paciente,
                [e.target.name]: e.target.value,
              })
            }
            value={paciente.propietario || ""}
          />
        </div>
        <div className="text-white mb-5">
          <label htmlFor="telefono" className="block font-bold">
            Telefono
          </label>
          <input
            id="telefono"
            type="tel"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Telefono Propietario"
            name="telefono"
            onChange={(e) =>
              setPaciente({
                ...paciente,
                [e.target.name]: e.target.value,
              })
            }
            value={paciente.telefono || ""}
          />
        </div>
        <div className="text-white mb-5">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            placeholder="Email Propietario"
            id="email"
            name="email"
            onChange={(e) =>
              setPaciente({
                ...paciente,
                [e.target.name]: e.target.value,
              })
            }
            value={paciente.email || ""}
          />
        </div>
        <div className="text-white mb-5">
          <label htmlFor="fecha" className="block font-bold">
            Fecha alta
          </label>
          <input
            id="fecha"
            type="date"
            className="mt-3 w-full rounded-lg py-2 px-5 text-gray-700"
            name="fecha"
            onChange={(e) =>
              setPaciente({
                ...paciente,
                [e.target.name]: e.target.value,
              })
            }
            value={paciente.fecha || ""}
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
            name="sintomas"
            onChange={(e) =>
              setPaciente({
                ...paciente,
                [e.target.name]: e.target.value,
              })
            }
            value={paciente.sintomas || ""}
          ></textarea>
        </div>
        <input
          type="submit"
          value="agregar"
          className=" bg-cyan-700 text-white my-5 text-center uppercase w-full px-5 py-3 text-xl font-bold rounded-lg hover:bg-cyan-400 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;
