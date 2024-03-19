import React from "react";

const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const Addbasket = () => {
    const productCheck = basket.find((item) => {
      return item.id === product.id;
    });
    if (productCheck) {
      productCheck.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        productCheck,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithout = basket.filter((item) => item.id !== product.id);
    currentBasket.amount -= 1;
    if (basketWithout === 0 && basketWithout.amount != 0) {
      setBasket([basketWithout]);
    } else {
      setBasket([...basketWithout, currentBasket]);
    }
  };
  return (
    <div>
      <div className="product">
        <div className="product-image" >
            <img src={product.img}></img>
        </div>
        <div className="product-detials">
          <h1>{product.title}</h1>
          <h4>${product.price}</h4>
          <button onClick={removeBasket}>Sepetten Çıkart</button>
          <h5>{(basketItem && basketItem.amount) || 0}</h5>
          <button onClick={Addbasket}>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
