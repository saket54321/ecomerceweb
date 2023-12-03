import User from "./user.schema.js"

export default class UserModel{
    
    static async signUp(user){
        //console.log(user);
        try{
        const newUser = new User(user);
        //console.log(newUser);
        //await newUser.save();
         await User.create(newUser);
        //console.log(newUser);
        return newUser;
        }

        
         catch(error){
             console.log("error");
         }
    }
    static async signIn(email,password){
        
        try{
            //console.log(email);
            return await User.findOne({email,password});
        }
        catch(error){
            console.log("error in signin");
        }
    }


}