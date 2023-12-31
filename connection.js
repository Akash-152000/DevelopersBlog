require('dotenv').config()
const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

module.exports= connectToMongo;