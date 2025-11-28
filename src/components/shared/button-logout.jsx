"use client";
import { logoutAction } from "@/actions/auth-actions";
import React from "react";
import { Button } from "react-bootstrap";
import "./button-logout.scss";

export const ButtonLogout = (props) => {
  const handleLogout = async () => {
    const res = confirm("Are you sure to logout?");
    if (!res) return;

    await logoutAction();
  };

  return (
    <div className="logout-container">
      <Button {...props} onClick={handleLogout}>
        <i className="pi pi-sign-out"></i> LogOut
      </Button>
    </div>
  );
};
