import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav(props) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => window.removeEventListener("scroll");
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
        alt=""
        className="nav__logo"
      />
      <img
        src="https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg"
        alt=""
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
