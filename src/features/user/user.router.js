import express from "express";
const userRouter = express.Router();
import UserController from "./user.controller.js";
//import UserController from "./user.controller.js";
const userController=new UserController();
userRouter.post('/signup',userController.signup);
userRouter.post('/signin',userController.signin);
//userRouter.get('/',userController.getallsuers);

export default userRouter;