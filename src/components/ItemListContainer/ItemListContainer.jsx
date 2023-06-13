import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { getProducts} from "../../Mocks/products";
import { ItemList } from "../ItemList/ItemList";
const ItemListContainer = ({ props }) => {
  const [productList, setProductList] = useState([]);
  const { categoryid } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        if (categoryid) {
          const filteredProducts= res.filter((prod)=> prod.categoria === categoryid)
          setProductList(filteredProducts)
        } else {
          setProductList(res);
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchProducts();
  }, [categoryid]);
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
