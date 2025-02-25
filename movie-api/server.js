const express = require("express")
const mongoose = require("mongoose")
const port = 3000;
const app = express();
const moviesRoutes = require("./routes/movieRoutes")

app.use(express.json());

mongoose.connect("mongodb+srv://hrithikvasanthram:hrithik@cluster0.rrsug.mongodb.net/").then(()=>console.log("connected to db")).catch(err=>console.log("not connected ",err));

app.use("/api/movies",moviesRoutes)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})