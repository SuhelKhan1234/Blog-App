const express = require("express");
const app = express();
// Server Createing


require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware

app.use(express.json());


//Import ALL Routes
const blog = require("./routes/blog")

//Mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database")
connectWithDb();

//Start the servr

app.listen (PORT, ()=>{
    console.log(`App is connected at the Port no ${PORT}`);

})

app.get("/", (req, res)=> {
    res.send (`<h1>This is my HomePage Baby<h1>`)
    
})











































// app.listen(3000, ()=>{
//     console.log("App is running successfully");
// })// Server Activation

// app.get("/",(req,res)=>{
//     res.send(`<h1>This is my Home Page</h1>`)
// }) //Default Routes