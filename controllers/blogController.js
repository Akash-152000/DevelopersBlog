const Blog = require("../models/blog");

function handleAddNewBlogPage(req,res){
    return res.render('addBlog',{
        user:req.user
    })
}

async function handleAddNewBlog(req,res){
    const {title, body} = req.body
    console.log(req.body);

    const blog = await Blog.create({
        title:title,
        body:body,
        createdBy:req.user._id,
        coverImageURL:`/uploads/${req.file.filename}`
    })

    return res.redirect(`/blog/${blog._id}`)
}

async function handleBlogPage(req,res){
    const blog = await Blog.findById(req.params.id).populate("createdBy")
    res.render('blog',{
        user:req.user,
        blog:blog
    })
}

module.exports = {handleAddNewBlog, handleAddNewBlogPage, handleBlogPage}