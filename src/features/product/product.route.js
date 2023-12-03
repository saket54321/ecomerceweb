import express from "express";
import ProductController from "./product.controller.js";
const ProductRouter=express.Router();
const productController=new ProductController();
ProductRouter.get('/',productController.getallproduct);
ProductRouter.post('/',productController.addProduct);

ProductRouter.post('/rate',productController.rateproduct);
ProductRouter.get('/filter',productController.filterProduct);
//this is a way of passing the params but in api write /id not /:id
ProductRouter.get('/:id',productController.getoneProduct);
//ProductRouter.get('/f/fo',productController.getallproduct);



export default ProductRouter;