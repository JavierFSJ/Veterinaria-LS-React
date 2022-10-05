
/* Componentes */
import Header from "./components/Header";
import Formulario from "./components/Form";
import List from "./components/List";

const AppPacientes = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-20 px-5 md:px-0 lg:flex gap-10">
        <Formulario />
        <List />
      </main>
    </>
  )
}

export default AppPacientes;