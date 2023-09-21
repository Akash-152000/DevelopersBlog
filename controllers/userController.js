const User = require("../models/user");

function handleSigninPage(req, res) {
  return res.render("signin");
}
async function handleSignin(req, res) {
  const body = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(
      body.email,
      body.password
    );
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render('signin',{error:"Incorrect email or password"})
  }
}

function handleSignupPage(req, res) {
  return res.render("signup");
}

async function handleSignup(req, res) {
  const body = req.body;
  await User.create({
    fullName: body.fullName,
    email: body.email,
    password: body.password,
  });
  return res.redirect("/");
}

function handleUserLogout(req,res){
    res.clearCookie("token").redirect('/')
}

module.exports = {
  handleSignin,
  handleSignupPage,
  handleSignup,
  handleSigninPage,
  handleUserLogout
};
