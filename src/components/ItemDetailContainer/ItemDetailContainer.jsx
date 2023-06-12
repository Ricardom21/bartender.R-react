import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { getProductsById } from '../../Mocks/products';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState (null)
  const {productosId } = useParams()
    useEffect(()=>{
      getProductsById(productosId)
        .then((response)=>setProduct(response))
    },[productosId])
  return (
    <div>
      {
        product?
      <ItemDetail {...product}/>
    :
    <div> Loading</div>
    }
    </div>
  )
};

