import React from 'react'
import './App.css'
import {evaluate} from 'mathjs';
import BotonClear from './componentes/Boton-clear';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import logo from './imagenes/logo.svg';
import {useState} from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = val =>{
    setInput(evaluate(input));
  };


  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
        <img 
        src={logo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' 
        />
     </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App;
