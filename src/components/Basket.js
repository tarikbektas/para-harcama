import React from 'react'
import BasketItems from './BasketItems'

const Basket = ({basket,product,total}) => {

  return (
    <div> 
         {basket.map((item,key)=>{
            return <BasketItems product={product.find(p=>p.id === item.id)} item={item} key={key} ></BasketItems>
         })}
             <h4>Toplam: {total}</h4>
    </div>
  )
}

export default Basket