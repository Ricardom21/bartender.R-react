import imagen1 from '../img/coctelera.webp'
import imagen2 from '../img/jigger.jpg'
import imagen3 from '../img/cuchara.jpg'
import imagen4 from '../img/dosificador.jpg'
import imagen5 from '../img/mortero.webp'
import imagen6 from '../img/copas.jpg'
import imagen7 from '../img/gomabarra.jpg'
import imagen8 from '../img/escarchador.webp'

const productos = [
    {
        id:1,
        nombre: "Coctelera",
        categoria: "cocina",
        precio: 2500,
        img: imagen1,
        descripcion: "una buena coctelera",
        stock:20
    },
    {
        id:2,
        nombre: "Jigger",
        categoria: "bartender",
        precio: 1500,
        img: imagen2,
        descripcion: "una buena coctelera",
        stock:30
    },
    {
        id:3,
        nombre: "Cuchara",
        categoria: "bartender",
        precio: 3500,
        img: imagen3,
        descripcion: "una buena coctelera",
        stock:50
    },
    {
        id:4,
        nombre: "Dosificador",
        categoria: "bartender",
        precio: 500,
        img: imagen4,
        descripcion: "una buena coctelera",
        stock:60
    },
    {
        id:5,
        nombre: "Mortero",
        categoria: "bartender",
        precio: 5500,
        img: imagen5,
        descripcion: "una buena coctelera",
        stock:32
    },
    {
        id:6,
        nombre: "Copas",
        categoria: "bartender",
        precio: 10000,
        img: imagen6,
        descripcion: "una buena coctelera",
         stock:25
    },
    {
        id:7,
        nombre: "Esterilla",
        categoria: "bartender",
        precio: 6500,
        img: imagen7,
        descripcion: "una buena coctelera",
         stock:10
    },
    {
        id:8,
        nombre: "Escarchador",
        categoria: "bartender",
        precio: 7500,
        img: imagen8,
        descripcion: "una buena coctelera",
        stock:20

    },
]

const DELAY = 200

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos);
        },DELAY)
    })
}

export const getProductsById = (productosId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos.find(prod => prod.id == productosId));
        },DELAY)
    })
}

export const filtrarCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productosFiltrados = productos.filter(
          (producto) => producto.categoria === categoria
        );
        resolve(productosFiltrados);
      }, DELAY);
    });
  };