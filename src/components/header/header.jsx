import React from "react";
import "./header.scss";
import { header } from "../../helpers/config";

const Header = ({ session }) => {
  const username = session?.user?.username;

  return (
    <>
      {session ? (
        <header className="header">
          <h1>
            {header.authenticated.title} {username}!
          </h1>
          <br />
          <h2>{header.authenticated.subtitle}</h2>
        </header>
      ) : (
        <header className="header">
          <h1>{header.guest.title}</h1>
          <h2>{header.guest.subtitle}</h2>
        </header>
      )}
    </>
  );
};

export default Header;
