const express = require('express');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    console.log("Request received for products list");
    res.json({
        status: 'Fail',
        message: "Work in progress",
    })
})

module.exports = {
    productRouter,
}