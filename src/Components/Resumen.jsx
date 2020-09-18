import React from "react";
import styled from '@emotion/styled'
import {primeraMayuscula} from '../Helper'

const ContenedorResumen =styled.div`
padding:1rem;
text-align:center;
background-color:#00838f;
color:#FFFFFF;
margin-top:1rem;
`

const Resumen = ({datos}) => {

    const { marca,year,plan}=datos;
    if(marca===''||year===''||plan===''){return null;}
  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Año: {primeraMayuscula(year)}</li>
        <li>plan: {primeraMayuscula(plan)}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
