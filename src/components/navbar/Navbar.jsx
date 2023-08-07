import {
  ChatBubbleOutlineOutlined,
  SearchOutlined,
  DehazeOutlined,
} from "@mui/icons-material";
import React from "react";
import { navbarItems } from "../../contents/content";
import "./navbar.scss";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <DehazeOutlined
          className={sidebar ? "hidden" : "icon"}
          onClick={() => setSidebar((prev) => !prev)}
        />
        {/* Search */}
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        {/* Nav Item */}
        <div className="nav-item">
          {navbarItems.map((item) => (
            <div className="item" key={item.id}>
              {item.icon}
            </div>
          ))}
          <div className="item">
            <ChatBubbleOutlineOutlined style={{ fontSize: "20px" }} />
            <div className="counter">9</div>
          </div>
          <div className="item">
            <img
              className="avatar"
              src="https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
