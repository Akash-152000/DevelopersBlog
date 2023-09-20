const express = require('express')
const path = require('path')
const connectToMongo = require('./connection.js')

const userRoute = require('./routes/userRoute')

// initialize
const app = express();
const PORT = 8000

app.use(express.urlencoded({extended:false}))

// Connection to mongo db
connectToMongo();

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/user',userRoute)

app.listen(PORT,()=>console.log(`Server started on PORT:${PORT}`))
