import mongoose, { Schema } from "mongoose";

const photoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "photo",
  },
  photoUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
});

const Photo = new mongoose.model("Photo", photoSchema, "photos");

export default Photo;
