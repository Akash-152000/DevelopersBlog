const express = require('express')
const multer = require('multer')
const path = require('path')
const {handleAddNewBlog, handleAddNewBlogPage} = require('../controllers/blogController')


const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null, path.resolve(`./public/uploads/${req.user._id}`))
    },
    filename:function(req,file,cb){
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null,fileName)
    }
}) 

const upload = multer({storage:storage})

const blogRoute = express.Router();

blogRoute.get('/add-new', handleAddNewBlogPage)
blogRoute.post('/', upload.single('coverImage'), handleAddNewBlog)

module.exports = blogRoute;