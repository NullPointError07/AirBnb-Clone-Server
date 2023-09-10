import mongoose from "mongoose";

const airbnbSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type:String, required: true},
    price: {type:Number,required : true},
    house_type: String,
    location: {country: String, state: String},
    rating: {type:Number},
    amenities: [String],
    availability: {
        start_date: Date,
        end_date: Date
    },
    categories: [String],
    host: {
        name: String,
        year: Number,
        host_image: String,
    },
    bed: {type: Number, default: 0},
    bathroom: {type: Number, default: 0},
    property_type: String,
    images: [String],
})

export const airbnbModel = mongoose.model("Airbnb", airbnbSchema)

