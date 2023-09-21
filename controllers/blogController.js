const Blog = require("../models/blog");
const Comment = require("../models/comments");

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
    const comments = await Comment.find({blogId:req.params.id}).populate("createdBy")
    res.render('blog',{
        user:req.user,
        blog:blog,
        comments:comments
    })
}


async function handleAddComment(req,res){
    await Comment.create({
        content:req.body.content,
        blogId:req.params.blogId,
        createdBy:req.user._id
    })
    console.log("asdfgh");
    res.redirect(`/blog/${req.params.blogId}`)
}

module.exports = {handleAddNewBlog, handleAddNewBlogPage, handleBlogPage, handleAddComment}