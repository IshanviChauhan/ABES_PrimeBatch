const {ProductModel} = require('../../../../models/product-schema.js');

const getProductsController = async (req, res) => {
    // const productsList = await ProductModel.find();

    const {page = 1, limit = 6, q = ""} = req.query;

    let mongooseQuery = ProductModel.find();
    
    const regexMatch = new RegExp(q, "i");

    mongooseQuery = mongooseQuery.where("title").regex(regexMatch);

    const queryClone = mongooseQuery.clone();
    const totalProducts = await queryClone.countDocuments();

    mongooseQuery = mongooseQuery.sort("_id");
    mongooseQuery = mongooseQuery.skip((page - 1)*limit);
    mongooseQuery = mongooseQuery.limit(limit);

    const productsList = await mongooseQuery;

    res.send({
        status: 'Success',
        data: {
            products: productsList,
            page,
            limit,
            total: totalProducts,
        }
    })
}

const postProductsController = (req, res) => {
    const newProduct = ProductModel.create({
        title: "Parle-G",
        price: "10",
        stock: "100"
    })
    res.send({
        status: 'Created',
        data: {
            products: [],
        }
    })
}

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
    postProductsController,
    createProductController
}