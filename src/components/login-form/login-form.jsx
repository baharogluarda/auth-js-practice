"use client";
import React, { useActionState } from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./login-form.scss";
import { loginFormTitle } from "@/helpers/config";
import TextInput from "../form-fields/text-input";
import { PasswordInput } from "../form-fields/password-input";
import { SubmitButton } from "../form-fields/submit-button";
import { loginAction } from "@/actions/auth-actions";
import { initialState } from "@/helpers/form-validation";

export const LoginForm = () => {
  const [state, formAction] = useActionState(loginAction, initialState);
  console.log("STATE:", state);

  return (
    <Container className="login-form">
      <Row className="justify-content-center ">
        <Col sm={12}>
          <Card>
            <Card.Body>
              <h4 className="mb-4">{loginFormTitle}</h4>

              {!state.ok && state.message && (
                <Alert variant="danger" className="w-100">
                  {state.message}
                </Alert>
              )}
              <Form action={formAction}>
                <TextInput
                  label="Username"
                  name="username"
                  error={state?.errors?.username}
                  defaultValue={state?.data?.username || "user"}
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  error={state?.errors?.password}
                  defaultValue={state?.data?.password || "pass"}
                />
                <SubmitButton title="Login" />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
