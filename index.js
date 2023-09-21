const express = require('express')
const path = require('path')
const connectToMongo = require('./connection.js')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoute')
const blogRoute = require('./routes/blogRoute')
const checkForAuthenticationCookie = require('./middlewares/authentication.js')

// initialize
const app = express();
const PORT = 8000

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))

// Connection to mongo db
connectToMongo();

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.get('/',(req,res)=>{

    res.render('home',{
        user:req.user
    })

})

app.use('/user',userRoute)

app.use('/blog',blogRoute)


app.listen(PORT,()=>console.log(`Server started on PORT:${PORT}`))
