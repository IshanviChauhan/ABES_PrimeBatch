require("./src/config/db.js");
const express = require('express');
const morgan = require('morgan');
const {productRouter} = require('./src/api/v1/products/routes/product-routes.js');
const PORT = 2500;

const app = express();

//App Level Middleware
app.use(morgan('dev'));

app.use("/api/v1/products", productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});