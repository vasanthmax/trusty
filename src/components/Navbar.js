import React from "react";
import Logo from "../assets/trustylogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-button">
          <button>Registrieren</button>
          <button>Anmelden</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
