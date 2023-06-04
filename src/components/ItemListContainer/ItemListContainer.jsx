import { Typography } from '@mui/material';
import { useEffect, useState } from "react"
import { getProducts } from "../../Mocks/products"
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = ({props}) => {
  
 const [products,setProducts] = useState([])
 useEffect(()=> {
  getProducts().then(Response=>setProducts(Response))
 },[])
  return (
    <>
      <Typography variant="h2" className="texto smaller-font background-style">{props}</Typography>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer

