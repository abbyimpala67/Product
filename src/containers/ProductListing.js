import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from '../redux/actions/productActions';
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const disptach = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      })
      console.log("response", response.data);
      disptach(setProducts(response.data));
  };

  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <div className="ui grid container" style={{marginTop:'2%'}}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
