import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
