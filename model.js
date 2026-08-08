const mongoose = require("mongoose") ;

// const blogSchema = blogSchema
const blogSchema = new mongoose.Schema(
      {
            title : {
                  type : String,
                  require : true,
                  default : "title"
            },
            userName : {
                  type : String,
                  require : true,
                  default : "yourname",
            },
            content : {
                  type : String,                 
                  require : true,
                  default : "It's about "
            },
            blogType:{
                  type : String,
                  require : true,
            },
            date : Date
      }
)
const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog;