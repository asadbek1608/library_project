const {Router} = require("express")
const { getAllAuthors, getOneAuthor, addAuthor, updateAuthor, deleteAuthor, searchAuthors } = require("../controller/author.ctr")
const customValidatorMiddleware = require("../validator/author.validate")
const accessTokenMiddleware = require("../middleware/accessToken.middleware")
 
const authorRouter = Router()

authorRouter.get("/get_all_authors", accessTokenMiddleware, getAllAuthors)
authorRouter.get("/search", accessTokenMiddleware, searchAuthors)
authorRouter.get("/get_one_author/:full_name", accessTokenMiddleware, getOneAuthor)
authorRouter.post("/add_author", accessTokenMiddleware, customValidatorMiddleware, addAuthor)
authorRouter.put("/update_author/:id", accessTokenMiddleware, updateAuthor)
authorRouter.delete("/delete_author/:id", accessTokenMiddleware, deleteAuthor)

module.exports = authorRouter