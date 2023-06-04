const productos = [
    {
        id:1,
        nombre: "Coctelera",
        categoria: "bartender",
        precio: 2500,
        img: "img/coctelera.webp",
        stock:20
    },
    {
        id:2,
        nombre: "Jigger",
        categoria: "bartender",
        precio: 1500,
        img: "img/jigger.jpg",
        stock:30
    },
    {
        id:3,
        nombre: "Cuchara",
        categoria: "bartender",
        precio: 3500,
        img: "img/cuchara.jpg",
        stock:50
    },
    {
        id:4,
        nombre: "Dosificador",
        categoria: "bartender",
        precio: 500,
        img: "img/dosificador.jpg",
        stock:60
    },
    {
        id:5,
        nombre: "Mortero",
        categoria: "bartender",
        precio: 5500,
        img: "img/mortero.webp",
        stock:32
    },
    {
        id:6,
        nombre: "Copas",
        categoria: "bartender",
        precio: 10000,
        img: "img/copas.jpg",
         stock:25
    },
    {
        id:7,
        nombre: "Esterilla",
        categoria: "bartender",
        precio: 6500,
        img: "img/gomabarra.jpg",
         stock:10
    },
    {
        id:8,
        nombre: "Escarchador",
        categoria: "bartender",
        precio: 7500,
        img: "img/escarchador.webp",
        stock:20

    },
]

const DELAY = 2000

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos);
        },DELAY)
    })
}

