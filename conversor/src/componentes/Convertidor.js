
import React, { useState } from 'react';
import '../App.css';

function Convertidor() {
  const [categoria, setCategoria] = useState('temperatura');
  const [tipoConversion, setTipoConversion] = useState('Celsius a Fahrenheit');
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const convertir = () => {

    let resultadoConversion;
    const valorNumerico = parseFloat(valor);

    switch (tipoConversion) {
      case 'Celsius a Fahrenheit':
        resultadoConversion = (valorNumerico * 9/5) + 32;
        break;
      case 'Fahrenheit a Celsius':
        resultadoConversion = (valorNumerico - 32) * 5/9;
        break;
      case 'Pies a metros':
        resultadoConversion = valorNumerico * 0.3048;
        break;
      case 'Metros a pies':
        resultadoConversion = valorNumerico / 0.3048;
        break;
      case 'Segundos a minutos':
        resultadoConversion = valorNumerico / 60;
        break;
      case 'Minutos a segundos':
        resultadoConversion = valorNumerico * 60;
        break;
      case 'Kilogramos a libras':
        resultadoConversion = valorNumerico * 2.20462;
        break;
      case 'Libras a kilogramos':
        resultadoConversion = valorNumerico / 2.20462;
        break;
      case 'Litros a galones':
        resultadoConversion = valorNumerico * 0.264172;
        break;
      case 'Galones a litros':
        resultadoConversion = valorNumerico / 0.264172;
        break;
      default:
        resultadoConversion = 'No se pudo realizar la conversión';
    }

    setResultado(resultadoConversion.toFixed(2));
  };

  const actualizarTiposDeConversion = (categoria) => {


    setCategoria(categoria);
    setTipoConversion(''); // Resetea la selección de tipo de conversión
    setResultado(''); // Limpia el resultado previo

    switch (categoria) {
      case 'temperatura':
        setTipoConversion('Celsius a Fahrenheit');
        break;
      case 'longitud':
        setTipoConversion('Pies a metros');
        break;
      case 'tiempo':
        setTipoConversion('Segundos a minutos');
        break;
      case 'masa':
        setTipoConversion('Kilogramos a libras');
        break;
      case 'volumen':
        setTipoConversion('Litros a galones');
        break;
      default:
        setTipoConversion('');
    }
  };

  return (
    <div className="convertidor-container">

      <div className="convertidor-field">

        <label>Selecciona una categoría:</label>

        <select value={categoria} onChange={(e) => actualizarTiposDeConversion(e.target.value)}>
            
          <option value="temperatura">Temperatura</option>
          <option value="longitud">Longitud</option>
          <option value="tiempo">Tiempo</option>
          <option value="masa">Masa</option>
          <option value="volumen">Volumen</option>


        </select>
      </div>
      <div className="convertidor-field">

        <label>Selecciona el tipo de conversión:</label>

        <select value={tipoConversion} onChange={(e) => setTipoConversion(e.target.value)}>

          {categoria === 'temperatura' && (
            <>
              <option value="Celsius a Fahrenheit">Celsius a Fahrenheit</option>
              <option value="Fahrenheit a Celsius">Fahrenheit a Celsius</option>
            </>
          )}
          {categoria === 'longitud' && (
            <>
              <option value="Pies a metros">Pies a metros</option>
              <option value="Metros a pies">Metros a pies</option>

            </>
          )}
          {categoria === 'tiempo' && (
            <>
              <option value="Segundos a minutos">Segundos a minutos</option>
              <option value="Minutos a segundos">Minutos a segundos</option>
   
            </>
          )}
          {categoria === 'masa' && (
            <>
              <option value="Kilogramos a libras">Kilogramos a libras</option>
              <option value="Libras a kilogramos">Libras a kilogramos</option>
    
            </>
          )}
          {categoria === 'volumen' && (
            <>
              <option value="Litros a galones">Litros a galones</option>
              <option value="Galones a litros">Galones a litros</option>
 
            </>
          )}
 
        </select>
      </div>


      <div className="convertidor-field">

        <label>Ingresa el valor a convertir:</label>

        <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />

      </div>

      <div className="convertidor-field">

        <button className="convertidor-button" onClick={convertir}>
          Convertir
        </button>

      </div>

      
      <div className="convertidor-field">
        <label>Resultado:</label>
        <span>{resultado}</span>
      </div>
    </div>
  );
}

export default Convertidor;