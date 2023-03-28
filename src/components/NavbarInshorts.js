import React from "react";
import "./NavbarInshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";
const NavbarInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="inshorts"
        className="mainnavpic"
      />

      {/* <h1>InShorts</h1> */}
    </div>
  );
};

export default NavbarInshorts;
