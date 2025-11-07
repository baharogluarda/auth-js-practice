"use client";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import "./login-form.scss";
import TextInput from "../form-fields/text-input";
import { PasswordInput } from "../form-fields/password-input";
import { SubmitButton } from "../form-fields/submit-button";

export const LoginForm = ({ children }) => {
  return (
    <Container className="login-form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Card>
            <Card.Body>
              <h4 className="mb-2">Please enter your Username and Password</h4>

              <Form>
                <TextInput
                  label="Username"
                  name="username"
                  error=""
                  defaultValue="12345aA."
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  error=""
                  defaultValue="12345aA."
                />
                <SubmitButton className="mt-2 w-100" title="Login" />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
