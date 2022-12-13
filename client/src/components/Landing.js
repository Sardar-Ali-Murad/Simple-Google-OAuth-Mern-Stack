import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import axios from "axios"
import { useAppContext } from '../context/appContext';
import { gapi } from "gapi-script";




export default function Landing() {
   gapi.load("client:auth2", () => {
      gapi.client.init({
        client_id:"192561371119-4bukh2usd6th61menqtvpvd79og77vct.apps.googleusercontent.com",
        plugin_name: "chat",
        apiKey: "AIzaSyA2Rf8RxtlHsUbCw1OCLfHof3Y3UJz5By4",
      });
    });
   let { Google,user}=useAppContext()
   let navigate=useNavigate()
   
   React.useEffect(()=>{
      if(user){
         setTimeout(()=>{
        navigate("/Home")
      },3000)
   }
   },[user,navigate])

   const responseGoogleSuccess = async (response) => {
       try {
       let {data}=await axios.post("api/v1/auth/googlelogin",{idToken:response.tokenId})
        Google({user:data.user,token:data.token})
       } catch (error) {
         console.log(error);
       }     
   }
   
   
   
   
   const responseGoogleError = (response) => {
           console.log(response)
   }
   
  return (
    <div className="App">
     <GoogleLogin
    clientId="192561371119-4bukh2usd6th61menqtvpvd79og77vct.apps.googleusercontent.com"
    buttonText="Login with google"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleError}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}
