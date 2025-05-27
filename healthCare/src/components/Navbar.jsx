import React from "react";
import { Bell, Search } from "lucide-react";
import "../styleSheet/nav.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_name">
        <h1>Health</h1>
        <h1 className="care">care.</h1>
      </div>
      <div className="nav_input" style={{ marginRight: "20vw" }}>
        <input type="search" name="" id="" placeholder="Search" />
        <Search className="search-icon me-2 " size={20} />
        <Bell
          className="bell-icon me-2"
          size={30}
          color="blue"
          style={{ fill: "blue" }}
        />
      </div>
      <div className="nav_btn">
        <i
          className="person-icon "
          class="bi bi-person-square"
          style={{ fontSize: "38px", color: "skyblue", marginRight: "10px" }}
        ></i>
        <i
          className="plus-icon"
          class="bi bi-plus-square-fill"
          style={{ fontSize: "38px", color: "blue" }}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
