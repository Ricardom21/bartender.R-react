import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ props }) => {
  const [productList, setProductList] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const productsCollectionRef = collection(db, "productos");

        let productsQuery = query(productsCollectionRef);
        
        if (categoryid) {
          const categoryQuery = where("categoria", "==", categoryid);
          productsQuery = query(productsQuery, categoryQuery);
        }

        const querySnapshot = await getDocs(productsQuery);

        const products = [];
        querySnapshot.forEach((doc) => {
          const productWithId = {id: doc.id, ...doc.data()};
          products.push( productWithId);
        });

        setProductList(products);
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
