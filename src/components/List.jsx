import React from 'react'
import Paciente from './Paciente'
import Empty from './Empty'

const List = () => {
  return (
    <div className='mt-10 lg:mt-0 lg:w-3/5 bg-slate-700 p-5 rounded-lg '>
      <div className="my-5 md:mt-10 md:mb-10">
        <h2 className="md:my-0 font-black text-3xl text-white text-center">
          Administra tus pacientes
        </h2>
        <p className="mt-2 text-center text-2xl font-bold text-gray-300">
          Lista <span className="text-indigo-200">Pacientes</span>
        </p>
      </div>
      <div className='mb-5 text-white lg:h-screen  lg:overflow-y-scroll'>

        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        
      </div>
    </div>
  )
}

export default List