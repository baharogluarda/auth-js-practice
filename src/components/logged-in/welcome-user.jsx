import React from "react";
import { ButtonLogout } from "../buttons/button-logout";

export const WelcomeUser = ({ user }) => {
  return (
    <>
      Welcome {user}
      <ButtonLogout />
    </>
  );
};
