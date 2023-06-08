import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { products } from "../../Mocks/products";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ props }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    
    const filteredProducts = products.filter(
      (product) => product.categoria === categoryId
    );
    setProductList(filteredProducts);
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

