import CartItemModel from "./cart.model.js";
export default class CartItemcontroller{
    additem(req,res){
        const {productid,quantity}=req.query;
        const userid=req.userid;
        const item=CartItemModel.add(productid,userid,quantity);
        if(item){
            res.status(200).send(item);
        }
        res.status(400).send("cart is not updated");
    }
    get(req,res){
        const userid=req.userid;
        const items=CartItemModel.get(userid);
        if(!items){
            res.status(400).send("can not items");
        }
        res.status(200).send(items);
    }

}