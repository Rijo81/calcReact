import './App.css';
import { Boton } from './components/Boton';
import freelogo from './img/freelogo.png';
import Screem from './components/Screem';
import BotonClear from './components/BotonClear';
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput ] = useState('');

  const AgregarInput = val => {
    setInput(input + val);
  };

  const CalcularResultado = () =>{
    if (input) {
      setInput(evaluate(input)); 
    } else{
      alert("Por favor ingrese valores para realizar los calculos.");
    }
  };
  return (
    <div className='App'>
      <div className='logo-contenedor'>
          <img
          src={ freelogo }
          className='logo'
          alt='Logo de freecodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
          <Screem input={ input } />
          <div className='fila'>
            <Boton manejarClic={ AgregarInput }>1</Boton>
            <Boton manejarClic={ AgregarInput }>2</Boton>
            <Boton manejarClic={ AgregarInput }>3</Boton>
            <Boton manejarClic={ AgregarInput }>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={ AgregarInput }>4</Boton>
            <Boton manejarClic={ AgregarInput }>5</Boton>
            <Boton manejarClic={ AgregarInput }>6</Boton>
            <Boton manejarClic={ AgregarInput }>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={ AgregarInput }>7</Boton>
            <Boton manejarClic={ AgregarInput }>8</Boton>
            <Boton manejarClic={ AgregarInput }>9</Boton>
            <Boton manejarClic={ AgregarInput }>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={ CalcularResultado }>=</Boton>
            <Boton manejarClic={ AgregarInput }>0</Boton>
            <Boton manejarClic={ AgregarInput }>.</Boton>
            <Boton manejarClic={ AgregarInput }>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={ () => setInput('0') }>Clear</BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
