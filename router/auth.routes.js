const Router = require("express")
const { register, verify, login, resendCode } = require("../controller/auth.ctr")

const authRouter = Router()

authRouter.post("/register", register)
authRouter.post("/verify", verify)
authRouter.post("/login", login)
authRouter.post("/resend_code", resendCode)

module.exports = authRouter