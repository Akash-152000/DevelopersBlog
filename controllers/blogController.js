const Blog = require("../models/blog");

function handleAddNewBlogPage(req,res){
    return res.render('addBlog',{
        user:req.user
    })
}

function handleAddNewBlog(req,res){
    console.log(req.body);
    res.redirect('/')
}

module.exports = {handleAddNewBlog,handleAddNewBlogPage}