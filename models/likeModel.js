const mongoose = require("mongoose");
//import mongoose

//router handler
const likeSchema = new mongoose.Schema({
     post:{
            type: mongoose.Schema.Types.ObjectId,// Objcet id 
    
            ref:"Post," //refrence to the post model
        },
        user:{
            type: String,
            required:true,
        }, 
})

//export
module.exports = mongoose.model("Like", likeSchema);