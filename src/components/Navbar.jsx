import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat On</span>
      <div className="user">
        <img src="src/img/ashu1.jpeg" alt="" />
        <span>Ashutosh</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
