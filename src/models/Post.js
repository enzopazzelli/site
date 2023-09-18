import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
}, { timestamps: true }
);

// Intenta recuperar el modelo existente "Post" o crea uno si no existe
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
