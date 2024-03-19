import React from 'react'

const Header = ({money,total,setBasket}) => {
    const resetBasket = () =>{
        setBasket([])
    }
   return (
    <div className='header'>
    {total ? <div>
        harcıyacak <span>{money-total}</span>  paranız var
    </div>:<div>toplamda <span>{money} </span> paranız var</div>}
    <button className='resetButton' onClick={resetBasket}>Sepeti Boşalt</button>
    </div>
  )
}

export default Header