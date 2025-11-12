"use client";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./login-form.scss";
import { loginFormTitle } from "@/helpers/config";
import { FormSection } from "./form-section";

export const LoginForm = () => {
  return (
    <Container className="login-form">
      <Row className="justify-content-center">
        <Col sm={12}>
          <Card>
            <Card.Body>
              <h4 className="mb-3">{loginFormTitle}</h4>
              <FormSection />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
