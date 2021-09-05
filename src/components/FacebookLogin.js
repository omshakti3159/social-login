import React from 'react'
import FacebookLoginButton from 'react-facebook-login';

const FacebookLogin = () => {
    const responseFacebook = (response) => {
        console.log(response);
      }

    return (
        <div>
            <FacebookLoginButton
            appId="513725096406905"
            autoLoad={false}
            callback={responseFacebook} />
        </div>
    )
}

export default FacebookLogin