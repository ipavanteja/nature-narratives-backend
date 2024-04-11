import mongoose from "mongoose";

const atlas_server_info =
  "mongodb+srv://pavan:PAVANtejamongo%401234@cluster0.22lbd4q.mongodb.net";
const database_name = "photography";

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
