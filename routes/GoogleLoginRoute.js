import express from "express"


let router=express.Router()


import {Login} from "../controllers/GoogleLogin.js"

router.route("/googlelogin").post(Login)

export default router