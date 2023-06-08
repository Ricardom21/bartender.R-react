import {ItemCount} from "../ItemCount/ItemCount"


export const ItemDetail = ({nombre, img, precio, categoria, descripcion, stock }) => {
  return (

    <div>
       <div className="group border border-gray-300 rounded-lg flex flex-col">
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

    <ItemCount/>


      </div>
    </div>
    </div>
  )
}