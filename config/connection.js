import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database successfully!🚀 ");
  } catch (error) {
    console.log("Error connecting to the database: ", error);
  }
};

export default connection;