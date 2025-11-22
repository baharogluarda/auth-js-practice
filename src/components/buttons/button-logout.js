"use client";
import { logoutAction } from "@/actions/auth-actions";
import React from "react";
import { Button } from "react-bootstrap";

export const ButtonLogout = (props) => {
  const handleLogout = async () => {
    const res = confirm("Are you sure to logout?");
    if (!res) return;

    await logoutAction();
  };

  return (
    <Button {...props} onClick={handleLogout}>
      <i className="pi pi-sign-out"></i> LogOut
    </Button>
  );
};
