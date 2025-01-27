
import express from 'express'
import userController from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';

const userRouter= express.Router()
const { registerUser, loginUser, userCredits,paymentRazorpay,verifyRazorpay } = userController;
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,userCredits)
userRouter.post('/pay-razor',userAuth,paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)
export default userRouter;


//localhost:4000/api/user/register
//localhost:4000/api/user/login