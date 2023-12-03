import UserModel from "./user.repository.js";
//import UserModel from "./user.model.js"
import User from "./user.schema.js"
import jwt from "jsonwebtoken";
//const userModel=new UserModel();
export default class userController{
    // constructor(){
    //     this.userModel = new UserModel();
    //   }
      
    async signup(req,res){
        //console.log(this.userModel);
        
        
        
          
        try{
        const {email,password,name,type}=req.body;
        let user=new User({name:name,password:password,email:email,type:type});
        //console.log(user);

         let users=  await UserModel.signUp(user);
         //console.log(users);
        // console.log(users);
         //let userss=users.then((a)=>a.json).then((b)=>b);
        //console.log(userss);
         //await User.create(req.body);

        // users.then((usera)=>usera).then((userb)=>res.send(userbb))
        // .catch((err)=>{
        //     console.log("erroe");
        // })
        res.status(200).send(users);
        }
        catch(error){
            console.log(error);

        }
        
    
    }
    async signin(req,res){
        //console.log(req.body);
        const {email,password}=req.body;
        const result=await UserModel.signIn(email,password);
        //console.log(result);
        //console.log(user);
        if(result){
            const token = jwt.sign(
                {
                    //this is for unique identification
                  userID: result._id,
                  email: result.email,
                },
                // secret key
                'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
                {
                    // expires
                  expiresIn: '1h',
                }
            )

            res.status(200).send(token);
            // here return is important other wise it gives some error
            // However, unlike promises, calling a query's .then() can execute the query multiple time"
            return;
        }
        return res.status(400).send("invalid user");

     }
    // getallsuers(req,res){
    //     res.status(200).send(UserModel.getAll());
    // }
}

