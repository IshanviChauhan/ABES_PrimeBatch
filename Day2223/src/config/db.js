const mongoose = require('mongoose');
// const fs = require('fs');
// const data = fs.readFileSync(".env", "utf-8");
// console.log("Data : ", data);

mongoose.connect(process.env.MONGO_DB_URL, {
    dbName: "PrimeAbesDay23"
})
.then(() => {
    console.log("🟣 : DB Connected Successfully");
})
.catch((err) => {
    console.log("🟣 : DB Connection Error : ", err.message);
});

