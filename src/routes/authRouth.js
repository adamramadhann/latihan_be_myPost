import getAll from '../controller/auth/getAll.js'
import login from '../controller/auth/login.js'
import register from '../controller/auth/register.js'


const Router = require("express")
const authPage =  Router()

authPage.post("/api/register", register)
authPage.post("/api/login", login)
authPage.post("/api/getAll", getAll)

export default authPage