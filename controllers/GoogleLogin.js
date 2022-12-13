import Auth from "../models/Auth.js";
import { OAuth2Client } from "google-auth-library"
const client = new OAuth2Client("192561371119-4bukh2usd6th61menqtvpvd79og77vct.apps.googleusercontent.com");


const Login=async (req,res)=>{
  let {idToken}=req.body
  let data=await client.verifyIdToken({idToken,audience:"192561371119-4bukh2usd6th61menqtvpvd79og77vct.apps.googleusercontent.com"})
//   console.log(data.payload)
  let {email,name,email_verified}=data.payload
//   if(email_verified){
    let AlreadyExistsUser=await Auth.findOne({email})

    if(AlreadyExistsUser){
        let token =AlreadyExistsUser.createJWT()
        res.status(200).json({user:{name:AlreadyExistsUser.name,email:AlreadyExistsUser.email},token})
    }
     
    else{
        let user=await Auth.create({name,email})
        let token =user.createJWT()
        res.status(200).json({user:{name,email},token})
    }
//   }
  
//   else{
//     res.status(400).json({msg:"SomeThing Went Wrong"})
//   }


}


export {Login}