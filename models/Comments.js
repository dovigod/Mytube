import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Video"
    } //giving Video id connected with comment

    //relationShip,, if we make video, we need to connect with comment
    //Method 1: video Schema, add array that has every comment ID
})

const model = mongoose.model("Comment",commentSchema);


export default model;
