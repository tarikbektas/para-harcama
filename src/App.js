import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import product from "./product.json";
import Product from "./components/Product";
import Basket from "./components/Basket";
function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    console.log("basket:", basket);
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * product.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <div className="App">
      <Header total={total} money={money} setBasket={setBasket}></Header>
      <div className="product-main">
      {product.map((item, index) => {
        return (
          <Product
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            key={index}
            product={item}
          ></Product>
        );
      })}
      </div>
      <Basket basket={basket} total={total} product = {product}></Basket>
    </div>
  );
}

export default App;
