const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
    //commenting id because mongodb already store data with _id
    // id: { 
    //     type: Number,
    //     unique: true,
    //     required: true
    // },
    title: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required : true,
    },
    serves: {
        type: Number,
        required : true,
    },
    postedBy: {
        name : {
            type: String,
            required : true,
        },
        userId : {
            type : Number,
            required : true,
        }
    },
    ingredients: {
        type : [ {name : {
            type: String,
            required : true,
        },
        quantity : {
            type : Number,
            required : true,
        },
        unit : {
            type: String,
            required : true,
        }}],
        required : true,
    },
    steps: {
        type:[String],
        required : true,
    },
    photos: {
        type: [String],
        required : true,
    },
    video: {
        type: String,
        required : true,
    }
})

module.exports = mongoose.model(
  "Recipe",
  recipesSchema,
  "Recipes"
);