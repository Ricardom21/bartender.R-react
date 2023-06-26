
const productos = [
    {
        id:"1",
        nombre: "Coctelera",
        categoria: "bartender",
        precio: 2500,
        img: "../img/coctelera.webp",
        descripcion: "coctelera 500ml , acero inoxidable, diametro de la boca 8cm, altura:20cm",
        stock:20
    },
    {
        id:"2",
        nombre: "Jigger",
        categoria: "bartender",
        precio: 1500,
        img: "../img/jigger.jpg",
        descripcion: "Capacidad : 20ml / 0.7oz, Acero Inoxidable, Doble, para que midas de la manera justa tus tragos ",
        stock:30
    },
    {
        id:"3",
        nombre: "Cuchara",
        categoria: "bartender",
        precio: 3500,
        img: "../img/cuchara.jpg",
        descripcion: "Medidas: Largo 32cm // Ancho 2cm, Material: Acero inoxidable, Ideal coctelería , tragos, bartenders, cocktails, bebidas, jugos. ",
        stock:50
    },
    {
        id:"4",
        nombre: "Dosificador",
        categoria: "bartender",
        precio: 500,
        img: "../img/dosificador.jpg",
        descripcion: "Se trata de un pico vertedor para botellas construido en acero inoxidable y goma, se usa en coctelería pero también puede ser usada en casa para la botella de aceite por ejemplo (no sirve para vinagre)",
        stock:60
    },
    {
        id:"5",
        nombre: "Mortero",
        categoria: "bartender",
        precio: 5500,
        img: "../img/mortero.webp",
        descripcion: "El mezclador puede usarse para machacar o exprimir ingredientes como menta o lima. La tapa del mismo está hecha de goma dura, que permite estrujar o exprimir",
        stock:32
    },
    {
        id:"6",
        nombre: "Copas",
        categoria: "bartender",
        precio: 10000,
        img: "../img/copas.jpg",
        descripcion: "Se trata de un pico vertedor para botellas construido en acero inoxidable y goma, se usa en coctelería pero también puede ser usada en casa para la botella de aceite por ejemplo (no sirve para vinagre)",
         stock:25
    },
    {
        id:"7",
        nombre: "Esterilla",
        categoria: "bartender",
        precio: 6500,
        img: "../img/gomabarra.jpg",
        descripcion: "Ideal para bares, boliches, confiterías, etc, Sirve para contener líquidos y derrames",
         stock:10
    },
    {
        id:"8",
        nombre: "Escarchador",
        categoria: "bartender",
        precio: 7500,
        img: "../img/escarchador.webp",
        descripcion: "Material: Plástico, Medidas: 15,5 cm (diámetro) y 20 cm (largo/profundidad), Uso recomendado para barman/barwoman coctelería ",
        stock:20

    },
    {
        id:"9",
        nombre: "Anis",
        categoria: "bebidas",
        precio: 1500,
        img: "../img/anis.jpg",
        descripcion: "Anís Cartujo, de origen venezolano, una de las marcas de anís más conocidas en América",
        stock:10
    },
    {
        id:"10",
        nombre: "Old Parr",
        categoria: "bebidas",
        precio: 19500,
        img: "../img/old-parr.jpg",
        descripcion: "El Old Parr 12 Años es un whisky escocés originario de la zona de Speyside",
        stock:25
    },
    
    {
        id:"11",
        nombre: "Pampero Oro",
        categoria: "bebidas",
        precio: 11500,
        img: "../img/pampero oro.jpg",
        descripcion: "Ron con excelencia y calidad venezolana",
        stock:20
    },
    {
        id:"12",
        nombre: "Ron Cacique",
        categoria: "bebidas",
        precio: 16500,
        img: "../img/ron cacique.jpg",
        descripcion: "Ron con excelencia y calidad venezolana",
        stock:20
    },
    {
        id:"13",
        nombre: "Vodka Ciroc",
        categoria: "bebidas",
        precio: 12500,
        img: "../img/vodka ciroc.webp",
        descripcion: "vodka con los mejores estandares",
        stock:20
    },
    {
        id:"14",
        nombre: "Anis",
        categoria: "bebidas",
        precio: 5500,
        img: "../img/vodka skyy.png",
        descripcion: "vodka botella de 750ml",
        stock:20
    },
    {
        id:"15",
        nombre: " Black Label",
        categoria: "bebidas",
        precio: 12500,
        img: "../img/w black label.webp",
        descripcion: "whisky, botella de 750ml, 12años",
        stock:20
    },
    {
        id:"16",
        nombre: " Buchanans",
        categoria: "bebidas",
        precio: 11500,
        img: "../img/w buchanans.webp",
        descripcion: "whisky, botella de 750ml, 12años",
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