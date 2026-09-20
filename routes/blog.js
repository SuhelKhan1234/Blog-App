// import controller

const express = require("express");
//route
const router = express.Router();

//import conntroller

const { dummyLink } = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const{ createPost} = require("../controllers/PostController");
 

//Mapping create
router.get("/dummyroute", dummyLink );
router.post("/comments/create", createComment);
router.post("/posts/create", createPost)

//export
module.exports = router;