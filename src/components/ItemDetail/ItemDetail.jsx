import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/ShoppingCartContext"
import {useNavigate} from "react-router-dom"

export const ItemDetail = (props) => {
  const { id, nombre, img, precio, categoria, descripcion, stock } = props

  const navigate = useNavigate()
const irAlCarrito = () => {
  navigate("/cart.jsx")
}
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItems } = useContext(CartContext)

  const handleOnAdd = (quantity)=>{
      setQuantityAdded(quantity)
      const item = {id, nombre, precio, stock}
      addItems(item, quantity)
      
  }
  return (
    <div className="flex justify-center">
      <div className="group border border-gray-300 rounded-lg flex flex-col mx-4">
        <div className="flex-shrink-0 p-4">
          <img src={img} alt={nombre} className="object-contain h-40 mx-auto" />
        </div>

        <div className="flex-grow p-6">
          <h3 className="text-lg font-medium text-gray-700">
            {nombre}
          </h3>

          <p className="mt-2 text-sm text-gray-900">
            Precio: {precio}
          </p>

          <p className="mt-2 text-sm text-gray-900">
            Categoria: {categoria}
          </p>

          <p className="mt-2 text-sm text-gray-900">
            Descripcion: {descripcion}
          </p>

          <p className="mt-1.5 text-xs text-gray-500">
            Stock: {stock}
          </p>

          <div className="flex justify-center mt-4">
          {quantityAdded> 0 ? <button onClick={irAlCarrito}>Ir al Carrito</button> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> }
          </div>
        </div>
      </div>
    </div>
  )
}
