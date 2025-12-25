const express = require("express");
const mongoose = require("mongoose");
//create app
const recipeRoutes = require("./routes/recepiesRoutes")
const app = express();
require("dotenv").config();
app.use("/api/recipes", recipeRoutes);


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to Mongoose Successfully")
})
.catch((err) => {
    console.log(err.message);
})
const server =  app.listen(process.env.PORT , () => {
    console.log(`server started on  port : ${process.env.PORT}`)
})