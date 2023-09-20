const {Router} = require('express')
const {handleSignin, handleSignupPage, handleSignup, handleSigninPage} = require('../controllers/userController.js')

const userRouter = Router();

userRouter.route('/signin').get(handleSigninPage).post(handleSignin)
userRouter.route('/signup').get(handleSignupPage).post(handleSignup)


module.exports = userRouter;