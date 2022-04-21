import React from "react";
import "./navbar.scss";

const Navbar = ({ setLogin, login }) => {
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <nav>
      <h3>Home</h3>
      <h3>About</h3>
      <div className="login">
        <span>
          {login === true ? "You are now logged in" : "You are now logged out"}
        </span>
        <button onClick={handleLogin}>
          {login === true ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
