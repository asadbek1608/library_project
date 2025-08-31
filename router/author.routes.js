const {Router} = require("express")
const { getAllAuthors, getOneAuthor, addAuthor, updateAuthor, deleteAuthor, searchAuthors } = require("../controller/author.ctr")

const authorRouter = Router()

authorRouter.get("/get_all_authors", getAllAuthors)
authorRouter.get("/search", searchAuthors)
authorRouter.get("/get_one_author/:full_name", getOneAuthor)
authorRouter.post("/add_author", addAuthor)
authorRouter.put("/update_author/:id", updateAuthor)
authorRouter.delete("/delete_author/:id", deleteAuthor)

module.exports = authorRouter