// import controller

const express = require("express");
//route
const router = express.Router();

//import conntroller

const { dummyLink } = require("../controllers/LikeController");




//Mapping create
router.get("/dummyroute", dummyLink );



//export
module.exports = router;