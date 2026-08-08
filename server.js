const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./model.js");
const app = express();

app.use(express.json());

//mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/faujya").then(() => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("Backend server is running");
});


app.post("/",(req, res) =>{
  const blog = Blog({
    title : req?.body.title || " ",
    username : req?.body.username || " ",
    content : req?.body.content || " ",
    blogtype : req?.body.blogtype || " ",
    date : req?.body.date ||" "
  })
  res.status(200).json({succes : true, message : "ho gyal"})
})



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
