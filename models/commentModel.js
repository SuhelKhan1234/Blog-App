const mongoose = require("mongoose");
//import mongoose

//router handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,// Objcet id 

        ref:"Post," //refrence to the post model
    },
    user:{
        type: String,
        required:true,
    }, 
    body:{
        type:String,
        required:true,
    }
})


// export
module.exports = mongoose.model("Comment", commentSchema);