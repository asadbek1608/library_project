const express = require("express")
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db.config")
const authorRouter = require("./router/author.routes")
const bookRouter = require("./router/book.routes")
const authRouter = require("./router/auth.routes")
const cookieParser = require("cookie-parser")
const errorMiddleware = require("./middleware/error.middleware")
const logger = require("./utils/logger")

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use(cookieParser())

connectDB()

// logger.log("Console logger")
logger.error("Error logger")
logger.warn("Warning logger")
logger.info("Info logger")
logger.debug("Debug logger")

//router
app.use(authorRouter)
app.use(bookRouter)
app.use(authRouter)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
})