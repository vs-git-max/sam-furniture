import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb configured successfully");
  } catch (error) {
    console.log(`Something happened ${error.message}`);
    process.exit(1);
  }
};

export default connectToDb;
