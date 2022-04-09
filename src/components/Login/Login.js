import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signWithGoogle } = useFirebase();
  return (
    <div>
      <h3>Login</h3>
      <div style={{ margin: "10px" }}>
        <button onClick={signWithGoogle}>Google SignIn</button>
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
