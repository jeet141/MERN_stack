const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors");
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)// localhost:5000/books


mongoose.connect("mongodb+srv://admin:ZIS1D87AUYp4H6op@cluster0.qydl9.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(()=>console.log("Connected to database"))
.then(() => {
    app.listen(5000)
})
.catch((err) => console.log(err));


//ZIS1D87AUYp4H6op