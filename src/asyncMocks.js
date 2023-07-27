const p = [
    {
        id : '1',
        name: 'Toy Story',
        precio: 2000,
        category: 'comedia',
        img:'https://image.tmdb.org/t/p/original/vFFdFGj4bYwnAukTYHu2cMzt5NO.jpg ',
        stock: 4,

    },

    {
        id:'2',
        name:'Matrix',
        precio: 6000,
        category: 'simulacion',
        img:'https://image.tmdb.org/t/p/original/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg',
        stock: 2,

    },

    {
        id:'3',
        name: 'Gato con botas',
        precio: 3000,
        category: 'accion',
        img: 'https://vignette2.wikia.nocookie.net/doblaje/images/2/24/GatoConBotasNetflix.jpg/revision/latest?cb=20151016171354&path-prefix=es',
        stock: 10 ,
    },
];

export const getProducts = () => {

    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) => {

    return new Promise((resolve) => {
        setTimeout(() => {

         resolve(products.find(prod => prod.id === productId))

        }, 500)

    }) 

    
}

export const getProductsByCategory = (productsCategory) => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            let prodFilter = products.filter(prod => prod.category === productsCategory)
            resolve(prodFilter)
        }, 500);
    })
}