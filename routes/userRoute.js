const {Router} = require('express')
const {handleSignin, handleSignupPage, handleSignup, handleSigninPage, handleUserLogout} = require('../controllers/userController.js')

const userRouter = Router();

userRouter.route('/signin').get(handleSigninPage).post(handleSignin)
userRouter.route('/signup').get(handleSignupPage).post(handleSignup)
userRouter.get('/logout',handleUserLogout)

module.exports = userRouter;