import React from "react";

const BasketItems = ({ product, item ,total}) => {
  console.log("item  bilgisi", item);

  return (
    <div>
      <div>{product.title} x {item.amount}</div>

    </div>
  );
};

export default BasketItems;
