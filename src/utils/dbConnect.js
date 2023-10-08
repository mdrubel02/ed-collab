import mongoose from "mongoose";

const bdConnect = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connected")
        return true;
    } catch (error) {
        console.log(error)
    }
}
export default bdConnect;