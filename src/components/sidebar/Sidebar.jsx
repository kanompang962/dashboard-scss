import React, { useContext, useState } from "react";
import "./sidebar.scss";
import { sidebarItem } from "../../contents/content";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";

const Sidebar = ({ sidebar, setSidebar }) => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className={sidebar ? "sidebar" : "hidden"}>
      <div className="sidebar-top">
        <DehazeOutlinedIcon
          className="icon"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="sidebar-center">
        <ul>
          {sidebarItem.map((sidebarItem) => (
            <div key={sidebarItem.title}>
              <p className="title">{sidebarItem.title.toLocaleUpperCase()}</p>
              {sidebarItem.item.map((itemBar, index) => (
                <Link
                  key={index}
                  style={{ textDecoration: "none" }}
                  to={`/${
                    itemBar.name.toLocaleLowerCase() === "dashboard"
                      ? ""
                      : itemBar.name.toLocaleLowerCase()
                  }`}
                >
                  <li>
                    <div className="icon"> {itemBar.icon}</div>
                    <span>{itemBar.name}</span>
                  </li>
                </Link>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div className="sidebar-bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        />
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        />
      </div>
    </div>
  );
};

export default Sidebar;
