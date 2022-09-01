import React, {useState} from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import './index.css';

function App() {
  const [cantidadGlobal, setCount] = useState(0);

  const sumaStockGlobal = () => {
    setCount(cantidadGlobal+1);
  }
  
  return (
    <div className="App">
      <Cabecera cantidadGlobal = {cantidadGlobal}/>
      <Listado sumaStockGlobal = {sumaStockGlobal}/>
    </div>
  );
}

export default App;
