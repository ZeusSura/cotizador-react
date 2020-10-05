import React, { useState } from "react";
import styled from "@emotion/styled";
import Error from "../Components/Error";
import { obtenerDiferenciaYear, calcularMarca ,calcularPlan } from "../Helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Formulario = ({setResumen}) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  const { marca, year, plan } = datos;

  //Obtener información
  const ObtenerInformacion = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerFormulario = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      return setError(true);
    }
    setError(false);
    //Obtneer diferencia de años
    let resultado = 2000;
    const diferencia = obtenerDiferenciaYear(year);
    resultado -= (diferencia * 3 * resultado) / 100;
    //Obtener el costo por la marca

    resultado = calcularMarca(marca) * resultado;
    let incrementoPlan = calcularPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    setResumen({
      cotizacion:resultado,
      datos
    })
  };

  return (
    <form onSubmit={obtenerFormulario}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={ObtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={ObtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={ObtenerInformacion}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={ObtenerInformacion}
        />
        Completo
      </Campo>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Formulario;
