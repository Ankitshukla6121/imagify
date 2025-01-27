import mongoose from "mongoose";
const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("database is the connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/imagify`)
}

export default connectDB;