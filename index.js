import express from "express";
import ProductRouter from './src/features/product/product.route.js';
import userRouter from "./src/features/user/user.router.js";
import cartItemrouter from "./src/features/cart/cart.route.js";
import jwtauth from "./src/middlewares/jwtauthentication.middleware.js";
import DB from "./src/config/index.js"
const server=express();
//DB();
server.use(express.json());

server.use('/api/products',jwtauth,ProductRouter);
server.use('/api/cartitems',jwtauth,cartItemrouter)
server.use('/api/users',userRouter);

DB();
server.listen(3200,()=>{
    
    console.log("server is listen on port 3200")
})