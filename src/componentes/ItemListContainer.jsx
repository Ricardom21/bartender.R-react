import React from 'react'
import { Container, Typography } from '@mui/material';
import '../estilos/Styles.css';
const ItemListContainer = ({props}) => {
  return (
    <Container className="item-list-container" maxWidth="sm">
        
    <Typography variant="h2" className="texto">{props}</Typography>
  </Container>
  )
}

export default ItemListContainer

