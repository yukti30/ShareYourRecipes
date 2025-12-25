const Recipes = require("../models/recipesModel")
module.exports.getAllRecipes = async(req ,res) => {
    try {
        const recipes = await Recipes.find()

        res.status(200).json(recipes)
    }
    catch(error) {
        res.status(500).json({
            message : "Failed to fetch data",
            error: error.message
        })
    }
}