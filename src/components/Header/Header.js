import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
