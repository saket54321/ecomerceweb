import ProductModel from "./product.model.js";
 export default class ProductController{
     getallproduct(req,res){
        const products=ProductModel.getAll();
        //console.log(products);
        res.status(200).send(products);
    }
    addProduct(req,res){
        //console.log(req.body);
        const {name,price,size}=req.body;
        const newproduct={
           name,
           price,
           size,
           imageUrl:"abc"
           

        }
        const create=ProductModel.add(newproduct);
        res.status(200).send(create);



    }
    getoneProduct(req,res){
        const id=req.params.id;
        //console.log(id);
        const product=ProductModel.get(id);
        //console.log(product);
        res.status(200).send(product);
    }
    filterProduct(req,res){
        const minprice=req.query.minPrice;
        const maxprice=req.query.maxPrice;
        const category=req.query.category;
        //console.log("yes");
        const product=ProductModel.filter(minprice,maxprice,category);
        //console.log("yes"); 
        res.status(200).send(product);
    }
    rateproduct(req,res){
        //console.log(req.query);
        const userid=req.query.userid;
        const productid=req.query.productid;
        const rating=req.query.rating;
        const error=ProductModel.rateproduct(userid,productid,rating);
        if(error){
            res.status(400).send(error);
        }
        res.status(200).send("rating is done");
    }
 }