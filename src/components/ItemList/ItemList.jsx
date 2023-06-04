import { Item } from "../Item/Item"
export const ItemList = ({products})=>{
    return (
    <section>
        <h1>Productos</h1>
        {
            products.map(product=><Item key={product.id} {...product}/>)
        }
    </section>
    )
}