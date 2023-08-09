const path = require("path");
const express = require("express");
const app = express();
const connectToMongo = require("../db/conn"); // Check the correct path here
connectToMongo();


//var cors = require('cors');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

//app.use(cors()); 
app.get("/", (req, res) => { 
    res.send(" hello from the Niyojit ")
}); 
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});



 




