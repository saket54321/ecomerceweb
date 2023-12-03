import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    inStock: Number,
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }],
    categories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }]

})
const Product=mongoose.model('Product',productSchema);
export default Product;