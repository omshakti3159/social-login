import React from 'react'
import GoogleLoginButton from 'react-google-login';
const GoogleLogin = () => {
    const responseGoogle=response=>{
        console.log(response)
    }
    return (
        <div style={{marginTop:'10px'}}>
            <GoogleLoginButton
                clientId="656424341039-mcvd78hfrfshsqdapks8jff59331a8ae.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
    )
}

export default GoogleLogin
