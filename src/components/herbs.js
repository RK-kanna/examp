import React, { useState } from "react";
import Search from './search';
import './herbs.css';
import product from './data2';

function Herbs() {
  const [cart, setCart] = useState([]);

  const addtocart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <div>
      <Search cart={cart} />
      <h1 className="txt-herb">Herbs</h1>
      {product.map((productItem => 
        <div className="herbs-display" key={productItem.id}>
          <img style={{ width: 200 }} src={productItem.img} alt={productItem.title} />
          <h3>{productItem.title}</h3>
          <h3>{productItem.price}</h3>
          <div className="but">
            <button onClick={() => addtocart(productItem)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Herbs;
