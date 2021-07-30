import React from "react";
import "../css/background.css";

const Layout = (props) => {
  return (
    <div className="bg">
      <div className="bg-opacity">{props.children}</div>
    </div>
  );
};
export default Layout;
