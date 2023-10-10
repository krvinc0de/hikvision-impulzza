import mongoose from "mongoose"

const connectDB = async () => {
    try {
        (await mongoose.connect('mongodb://localhost:27017/')).set("strictQuery", true)
    } catch (error) {
        console.log('error al coenctar a la base de datos')
    }
}

export default connectDB