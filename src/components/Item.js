import React, {useState} from 'react';

export default function Item(props){  
  const [cantidadlocal, setCount] = useState(props.stock);

  function descuentaStockLocalySumaStockGlobal(){  
    setCount(cantidadlocal-1);
    props.sumaStockGlobal();
  }

  return (
    <div className='producto'>
        <h3>{props.nomb}</h3>
        <p>{props.desc}</p> 
        <h5>En Stock: <span>{cantidadlocal === 0 ? "AGOTADO" : cantidadlocal}</span></h5>
        <button id="boton" onClick={descuentaStockLocalySumaStockGlobal} disabled ={cantidadlocal === 0 ? true : false}> {cantidadlocal === 0 ? "SIN STOCK" : "COMPRAR"} </button>
    </div>
  ) 
}
