import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);
  
  const renderList = products.map((product) => {
  const { id, image, title, price, category } = product;
    return (
      <div className="four wide column"  key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img
                src={image}
                alt={title}
              ></img>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  console.log(products);
  return <>{renderList}</>;
};

export default ProductComponent;
