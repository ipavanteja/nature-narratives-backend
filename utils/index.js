import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(`${atlas_server_info}/${database_name}`);
    console.log(`Mongo DB Connected : ${database_name}`);
  } catch (error) {
    console.log(error);
  }
}

async function disconnectDB() {
  try {
    await mongoose.disconnect();
    console.log("Mongo DB is Disconnected");
  } catch (error) {
    console.log(error);
  }
}

export { connectDB, disconnectDB };
