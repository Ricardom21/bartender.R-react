const productos = [
    {
        id:1,
        nombre: "Coctelera",
        categoria: "cocina",
        precio: 2500,
        img: "img/coctelera.webp",
        descripcion: "una buena coctelera",
        stock:20
    },
    {
        id:2,
        nombre: "Jigger",
        categoria: "cocina",
        precio: 1500,
        img: "img/jigger.jpg",
        descripcion: "una buena coctelera",
        stock:30
    },
    {
        id:3,
        nombre: "Cuchara",
        categoria: "cocina",
        precio: 3500,
        img: "img/cuchara.jpg",
        descripcion: "una buena coctelera",
        stock:50
    },
    {
        id:4,
        nombre: "Dosificador",
        categoria: "cocina",
        precio: 500,
        img: "img/dosificador.jpg",
        descripcion: "una buena coctelera",
        stock:60
    },
    {
        id:5,
        nombre: "Mortero",
        categoria: "cocina",
        precio: 5500,
        img: "img/mortero.webp",
        descripcion: "una buena coctelera",
        stock:32
    },
    {
        id:6,
        nombre: "Copas",
        categoria: "cocina",
        precio: 10000,
        img: "img/copas.jpg",
        descripcion: "una buena coctelera",
         stock:25
    },
    {
        id:7,
        nombre: "Esterilla",
        categoria: "bartender",
        precio: 6500,
        img: "img/gomabarra.jpg",
        descripcion: "una buena coctelera",
         stock:10
    },
    {
        id:8,
        nombre: "Escarchador",
        categoria: "bartender",
        precio: 7500,
        img: "img/escarchador.webp",
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
            resolve(productos.find(prod => prod.id === productosId));
        },DELAY)
    })
}