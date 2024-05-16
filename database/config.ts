import mongoose from "mongoose";

export const connectDB = async ():Promise<void> => {
    try {
        await mongoose.connect('mongodb+srv://srossiprieto:srp3317@cluster0.mm5joux.mongodb.net/')
        console.log('base de datos online')

    }catch(error){
        console.log(error)
        throw new Error("error al iniciar base de datos")
    }
}

