import React from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../Helper";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
`;

const ContenedorFInal = styled.span`
  padding: 2rem;
  text-align: center;
  background-color: #f29332;
  color: #ffffff;
  margin-top: 2rem;
`;
const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") {
    return null;
  }
  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Año: {year}</li>
        <li>plan: {plan}</li>
      </ul>
    </ContenedorResumen>
  );
};
export default Resumen;
