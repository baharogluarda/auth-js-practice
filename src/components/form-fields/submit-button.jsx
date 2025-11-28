"use client";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormStatus } from "react-dom";
import styles from "./submit-button.module.scss";

export const SubmitButton = ({
  title,
  icon = "send",
  className = "w-100",
  ...rest
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={`${className} ${styles.submitBtn}`}
      size="lg"
      disabled={pending}
      variant="primary"
      {...rest}
    >
      {pending ? (
        <Spinner size="sm" />
      ) : (
        <>
          {icon && <i className={`pi pi-${icon}`}></i>}&nbsp;
          {title}
        </>
      )}
    </Button>
  );
};
