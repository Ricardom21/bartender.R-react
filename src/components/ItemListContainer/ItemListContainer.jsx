import { Container, Typography } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from "react"
import { getProducts } from "../../Mocks/products"
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = ({props}) => {
  const handleAddToCart = (count) => {
    console.log(`Añadir al carrito: ${count} ítems`);
    // Lógica para agregar los ítems al carrito
 };
 
 const [products,setProducts] = useState([])
 useEffect(()=> {
  getProducts().then(Response=>setProducts(Response))
 },[])
  return (
    <Container className="item-list-container h-auto" maxWidth="sm">
     <Typography variant="h2" className="texto smaller-font background-style">{props}</Typography>
    <ItemCount stock={10} onAdd={handleAddToCart} />
    <ItemList products={products}/>
  </Container>
  )
}

export default ItemListContainer

