import React from 'react';

export default function Cabecera(props){
  
  return (
    <header>
        { 
        <div>
          <p>Diaz Gaston Alejandro - Camada 10</p>
          <h1>Carrito de Compras</h1>
          <p>Cantidad de Productos: <span>{props.cantidadGlobal}</span> </p>
        </div>
        }
    </header>
  )
}
