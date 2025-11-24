import React from "react";
import { ButtonLogout } from "../shared/button-logout";
import "./authorized-user.scss";
import { Container } from "react-bootstrap";

export const AuthorizedUser = ({ user }) => {
  return (
    <Container className="authorized-user">
      <h1 className="welcome-title">
        Welcome back, <span>{user}</span> 👋
      </h1>

      <p className="welcome-text">
        I swear I didn’t forget you this time… probably 😅  
        Anyway, good to see you again. Ready to do cool stuff?
      </p>

      <ButtonLogout />
    </Container>
  );
};
