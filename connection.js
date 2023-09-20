const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/developersBlog")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

module.exports= connectToMongo;