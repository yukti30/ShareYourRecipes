const {getAllRecipes} = require("../controller/recipesController")

const router = require("express").Router();

router.get("/" , getAllRecipes );

module.exports = router;