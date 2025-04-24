const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://ishanvichauhan:7@primebatchcluster.m556evf.mongodb.net/?retryWrites=true&w=majority&appName=PrimeBatchCluster"
)
.then(() => {
    console.log("DB Connected Successfully");
})
.catch((err) => {
    console.log("DB Connection Error : ", err.message);
});

