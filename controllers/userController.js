const User = require('../models/user')


function handleSigninPage(req,res){
    return res.render("signin")
}
async function handleSignin(req,res){
    const body = req.body
    const user = await User.matchPassword(body.email, body.password)
    console.log('User',user);
    return res.redirect('/')
}

function handleSignupPage(req,res){
    return res.render("signup")
}

async function handleSignup(req,res){
    const body = req.body
    await User.create({
        fullName: body.fullName,
        email: body.email,
        password:body.password
    })
    return res.redirect('/')
}


module.exports = {handleSignin, handleSignupPage, handleSignup, handleSigninPage};