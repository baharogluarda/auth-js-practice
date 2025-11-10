import React from "react";
import "./header.scss";
import { header } from "../../helpers/config";

const Header = () => {
  return (
    <header className="main-header">
      <h1>{header.title}</h1>
      <h2>{header.subtitle}</h2>
    </header>
  );
};

export default Header;
