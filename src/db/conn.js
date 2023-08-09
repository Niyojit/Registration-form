const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/bag", {
  
  }).then(() => {
    console.log("Connection successful");
  }).catch((e) => {
    console.log("No connection");
  });
};


module.exports = connectToMongo;
