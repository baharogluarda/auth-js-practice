import React from "react";
import { ButtonLogout } from "../buttons/button-logout";
import "./authorized-user.scss";
import { Container } from "react-bootstrap";

export const WelcomeUser = ({ user }) => {
  return (
    <Container>
      Welcome {user}
      <ButtonLogout />
    </Container>
  );
};
