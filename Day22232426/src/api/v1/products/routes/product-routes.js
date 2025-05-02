// const express = require('express');

// const productRouter = express.Router();

// productRouter.get('/', (req, res) => {
//     console.log("Request received for products list");
//     res.json({
//         status: 'Fail',
//         message: "Work in progress",
//     })
// })

// module.exports = {
//     productRouter,
// }

//Day 23
const express = require('express');
const { getProductsController, postProductsController, createProductController } = require("../controllers/products-controller.js");
const {validateCreateProductDto} = require("../dto/validate-create-product-dto.js");

const productRouter = express.Router();

productRouter.get("/", getProductsController);
// productRouter.post("/", postProductsController);
productRouter.post("/", validateCreateProductDto, createProductController);

module.exports = {
    productRouter,
}