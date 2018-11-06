const Product = require('../models/product')
const mongoose = require('mongoose')
const secret = require('../config/secrets')

// Connect to MongoDB
mongoose.connect(`mongodb://${secret.dbuser}:${secret.dbpass}@ds151853.mlab.com:51853/shopping-cart`, {useNewUrlParser: true })

const products = [
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0740/9143/products/fultons-new_1024x_2a554f3a-cd9c-475a-a7ce-3dd86c49916c_1024x.jpg?v=1538943774',
        title: 'Fultons',
        description: 'Our most versatile style, the Fultons are dark blue jeans with natural fading and whiskering. Made from our proprietary Mugsy Denim, the Fultons are supremely flexible, soft and comfortable.',
        price: 98
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0740/9143/products/lakeshores-1_1024x.jpg?v=1538944034',
        title: 'Lake Shores',
        description: 'Our most casual style, the Lake Shores are medium wash blue jeans with natural fading and whiskering. Made from the super flexible Mugsy Denim were known for, the Lake Shores are ridiculously soft and comfortable.',
        price: 98
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0740/9143/products/willys-pants-1_1024x.jpg?v=1538944746',
        title: 'Willys',
        description: 'A limited edition fall style, the Willys are monochromatic dark gray jeans. Made from our proprietary Mugsy Denim, the Willys are super soft, flexible and comfortable.',
        price: 98
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0740/9143/products/piers1_1024x.jpg?v=1538944426',
        title: 'Piers',
        description: 'Our limited edition lightwash blue jean, the Piers have natural fading and whiskering. Made from our proprietary Mugsy denim, the Piers are supremely soft, flexible and comfortable.',
        price: 98
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/0740/9143/products/studio-blues-pants-1_1024x.jpg?v=1538944633',
        title: 'Studio Blues',
        description: 'Our most stylish wash, the Studio Blues are super dark, monochromatic blue jeans. Made from our ultra flexible Mugsy Denim, the Studio Blues are supremely soft and comfortable.',
        price: 98
    })
]

// Loop through products
let done = 0
for (let i = 0; i < products.length; i++) {
    // save the modal to Mongo
    products[i].save((err, result) => {
        done++
        if (done === products.length) {
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}