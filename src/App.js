import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import Resumen from "./Components/Resumen";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });
  const { datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />
        <Resumen 
        datos={datos}
         />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
