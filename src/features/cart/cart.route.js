import express from "express";
import CartItemcontroller from "./cart.controller.js";
 const cartItemrouter=express.Router();
 const cartitemcontroller=new CartItemcontroller();

 cartItemrouter.post('/',cartitemcontroller.additem);
 cartItemrouter.get('/:id',cartitemcontroller.get);


 export default cartItemrouter;