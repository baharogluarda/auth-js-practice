import React from "react";
import { ButtonLogout } from "../shared/button-logout";
import "./welcome-back.scss";
import { Container } from "react-bootstrap";
import { welcomeBack } from "../../helpers/config";

export const WelcomeBack = ({ user }) => {
  return (
    <Container className="authorized-user">
      <h1 className="welcome-title">
        {welcomeBack.title} <span>{user}</span> {welcomeBack.icon}
      </h1>

      <p className="welcome-text">
        {welcomeBack.warn}
      </p>

      <ButtonLogout />
    </Container>
  );
};
