import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { getProductsById } from '../../Mocks/products';

export const ItemDeatilContainer = () => {
  const [product, setProduct] = useState (null)
    useEffect(()=>{
      getProductsById (1).then((response)=>setProduct(
        response
      ))
    })

  

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
};

