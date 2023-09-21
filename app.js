require('dotenv').config()
const express = require('express')
const path = require('path')
const connectToMongo = require('./connection.js')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoute.js')
const blogRoute = require('./routes/blogRoute.js')
const checkForAuthenticationCookie = require('./middlewares/authentication.js')
const Blog = require('./models/blog.js')

// initialize
const app = express();
const PORT = process.env.PORT

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))

// Connection to mongo db
connectToMongo();

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.get('/',async (req,res)=>{
    const allBlogs = await Blog.find({})
    res.render('home',{
        user:req.user,
        blogs:allBlogs
    })

})

app.use('/user',userRoute)

app.use('/blog',blogRoute)


app.listen(PORT,()=>console.log(`Server started on PORT:${PORT}`))
