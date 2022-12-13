import express from "express"
let router=express.Router()

import {Login,Register} from "../controllers/Users.js"
import UploadImage from "../controllers/UploadImage.js"

router.route("/register").post(Register)
router.route("/registerUploadImage").post(UploadImage)
router.route("/login").post(Login)


export default router