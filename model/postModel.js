const mongoose = require("mongoose")

const postModel = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        postDescription: {
            type: String,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postModel)