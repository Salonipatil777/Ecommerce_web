// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import Signup from "../../components/signup-form/Signup.component";
import Signin from "../../components/sign-in-form copy/Sign-in.component";
import './auth.style.css'

// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/Firebase/firebase.utils";

const Auth = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userRef = await createUserDocumentFromAuth(user);
  // };

//   const logGoogleUserRedirect = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     console.log({ user });
//   };

  return (
    <div className="forms">
      {/* <h1>This is a Sign In page</h1>
      <button type="button" class="btn btn-primary" onClick={logGoogleUser}>
        Click Here To SignIn
      </button><br/>
      <br/>
      <button
        type="button"
        class="btn btn-primary"
        onClick={signInWithGoogleRedirect}
      >
        Click Here To SignIn
      </button> */}
    
      <Signin/>
      <Signup />
  
    </div>
  );
};

export default Auth;
