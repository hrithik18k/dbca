const mongoose = require ("mongoose");

const moviesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    releaseYear:{
        type:Number,
    },
    availableCopies:{
        type:Number,
        required:true
    },
});

module.exports = mongoose.model("Movie",moviesSchema);