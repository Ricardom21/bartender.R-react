import { Item } from '../Item/Item';

export const ItemList = ({ products }) => {
  const itemsPerRow = 4;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};