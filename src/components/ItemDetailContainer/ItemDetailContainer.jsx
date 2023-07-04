import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../index.js';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productosId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDocRef = doc(db, 'productos', productosId);
        const productDocSnapshot = await getDoc(productDocRef);

        if (productDocSnapshot.exists()) {
          const productData = { id:productDocSnapshot.id, ...productDocSnapshot.data()};
          setProduct(productData);
        } else {
          console.log('El producto no existe.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [productosId]);

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <div>Loading</div>}
    </div>
  );
};
