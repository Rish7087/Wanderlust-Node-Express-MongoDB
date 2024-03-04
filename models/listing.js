const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=is&k=20&c=dC73T1IQk6xLU1tS4qvv1irub7PXXtBu5-mAAgjwiJ0=",
        set: (v) => v === "" 
        ? "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=is&k=20&c=dC73T1IQk6xLU1tS4qvv1irub7PXXtBu5-mAAgjwiJ0=" 
        : v,
       },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: 
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
});

listingSchema.post("findOneAndDelete", async (listing) => {
 await Review.deleteMany({_id: {$in: listing.reviews}})
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;