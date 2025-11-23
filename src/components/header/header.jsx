import React from "react";
import "./header.scss";
import { header } from "../../helpers/config";

const Header = ({ session }) => {
  const username = session?.user?.username;

  return (
    <>
      {session ? (
        <header className="header">Hi {username} hahahaha, i remember u now</header>
      ) : (
        <header className="header">
          <h1>{header.title}</h1>
          <h2>{header.subtitle}</h2>
        </header>
      )}
    </>
  );
};

export default Header;
