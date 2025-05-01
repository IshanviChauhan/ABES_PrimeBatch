require('dotenv').config();
require("./src/config/db.js");

const express = require('express');
const morgan = require('morgan');
const {productRouter} = require('./src/api/v1/products/routes/product-routes.js');
const cors = require('cors');
const PORT = 2500;

const app = express();

app.use(cors());

app.use(express.json());

console.log("🟣 : MONGO_DB_URL :",process.env.MONGO_DB_URL);

//App Level Middleware
app.use(morgan('dev'));

app.use("/api/v1/products", productRouter);

app.listen(PORT, () => {
    console.log(`🟣 : Server is running on http://localhost:${PORT}`);
});

// console.log(process.env);