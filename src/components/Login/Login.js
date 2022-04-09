import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h3>Login</h3>
      <div style={{ margin: "10px" }}>
        <button onClick={() => signInWithGoogle()}>Google SignIn</button>
      </div>
      <form action="">
        <input type="text" placeholder="Your Mail" id="" /> <br />
        <input type="password" placeholder="Your Password" id="" /> <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
