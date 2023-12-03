import mongoose from "mongoose";
//import {DB_NAME} from '../constants.js';
const url='mongodb://127.0.0.1/ecomdb'


const DB=async ()=>{
    try{
        const connectionInstance =await mongoose.connect(url);
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("error in mongodb connection");
        process.exit(1);
    }
}
export default DB;