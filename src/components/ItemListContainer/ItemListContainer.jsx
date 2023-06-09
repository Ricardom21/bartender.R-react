import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../Mocks/products";
import { ItemList } from "../ItemList/ItemList";
const ItemListContainer = ({ props }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    getProducts()
    .then((res)=>{
      if(categoryId){
        const filteredProducts = res.filter(
          (product) => product.categoria === categoryId)
        setProductList(filteredProducts)
      }else{
        setProductList(res)
      }
    })
  }, [categoryId]);
  return (
    <>
      <Typography variant="h2" className="texto smaller-font background-style">
        {props}
      </Typography>
      <ItemList products={productList} />
    </>
  );
};
export default ItemListContainer;

