import UserModel from "../user/user.model.js";
export default class ProductModel {
    constructor(
      id,
      name,
      desc,
      price,
      imageUrl,
      category,
      sizes
    ) {
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.imageUrl = imageUrl;
      this.category = category;
      this.price = price;
      this.sizes = sizes;
    }
  
    static add(product) {
      product.id = products.length + 1;
      products.push(product);
      return product;
    }
  
    static get(id) {
        //console.log(id);
      const product = products.find(
        (i) => i.id == id
      );
      //console.log(product);
      return product;
    }
  
    static getAll() {
      return products;
    }
  
    static filter(minPrice, maxPrice, category) {
      const result = products.filter((product) => {
        return (
          (!minPrice ||
            product.price >= minPrice) &&
          (!maxPrice ||
            product.price <= maxPrice) &&
          (!category ||
            product.category == category)
        );
      });
      return result;
    }
    static rateproduct(userid,productid,rating){
      //console.log(productid);
      if(!UserModel.getAll.id===userid){
        return "user not found"
      }
      const p=products.find((u)=>u.id==productid);
      if(!p){
        return "products not find"
      }
      if(!p.rating){
         p.rating=[];
        p.rating.push({userid:userid,rating:rating});
      }
      else{
        const index=p.rating.findIndex((r)=>r.userid===userid);
        if(index>=0){
        p.rating[index]={userid:userid,rating:rating};
        }
        else{
          p.rating.push({userid:userid,rating:rating});

        }
      }

    }
  }
  
  var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 10',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'Category1'
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'Category2',
      ['M', 'XL']
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'Category3',
      ['M', 'XL', 'S']
    ),
  ];
  