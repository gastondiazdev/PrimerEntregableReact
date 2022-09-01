import React from 'react'
import data from './data.json'
import Item from './Item'

export default function Listado({sumaStockGlobal}) {
  
  return (
    <div className='container'>
      {
      data.map((elementos)=> 
          <Item key= {elementos.id} nomb= {elementos.producto.nombre} desc= {elementos.producto.descripcion} stock= {elementos.stock} sumaStockGlobal= {sumaStockGlobal} />
      )
    }
    </div>
  )
}
