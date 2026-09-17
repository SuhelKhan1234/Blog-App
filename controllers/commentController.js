// import model

const Post = require("../models/commentModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment= async(req, res)=>{
    try{
        //fetch data from req body
        const {post, user, body}  = req.body;
        //Create a comment object
        const comment = new Comment({
            post, user, body
        });

        //Save the new Comment into the database
        const saveComment = await comment.save();
        // finde the post by ID , add new commant Array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} },{new: true} )
           .populate("comments") //populate the comments array eith comment documents

           res.json({
            post:updatedPost,
            
           })

    }

    catch(error){


    }
}