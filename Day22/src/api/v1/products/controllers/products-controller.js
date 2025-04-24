const {ProductModel} = require('../../../../models/product-schema.js');

const getProductsController = async (req, res) => {
    const productsList = await ProductModel.find();
    res.send({
        status: 'Success',
        data: {
            products: productsList,
        }
    })
}

// const postProductsController = (req, res) => {
//     const newProduct = ProductModel.create({
//         title: "Parle-G",
//         price: "10",
//         stock: "100"
//     })
//     res.send({
//         status: 'Created',
//         data: {
//             products: [],
//         }
//     })
// }

const createProductController = async (req, res) => {
    const obj = req.body;
    const newProduct = await ProductModel.create(obj);
    res.status(201);
    res.json({
        status: 'Created',
        data: {
            product: newProduct,
        }
    })
}

module.exports = {
    getProductsController,
    // postProductsController,
    createProductController
}