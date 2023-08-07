import React from "react";
import "./widget.scss";
import { KeyboardArrowUp } from "@mui/icons-material";

const Widget = ({ title, isMoney, link, icon, counter, per }) => {
  return (
    <div className="widget">
      {/* Left */}
      <div className="left">
        <span className="title">{title.toLocaleUpperCase()}</span>
        <span className="counter">
          {isMoney ? "$ " : ""}
          {counter}
        </span>
        <span className="link">{link}</span>
      </div>
      {/* Right */}
      <div className="right">
        <div className={`percentage positive`}>
          <KeyboardArrowUp />
          {per} %
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
