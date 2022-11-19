const { Schema, model } = require("mongoose")

const favImgSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required."],
            unique: true
        },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        imageUrl: {
            type: String,
            required: [true, "Image is required"]
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true,
    }
)

const FavImg = model("FavImg", favImgSchema)

module.exports = FavImg