import React from "react";
import { CopyrightContainer, CopyrightSpan } from "./CopyrightElements";
import { Container, Row, Col } from "styled-bootstrap-grid";

const Copyright = () => {
  return (
    <CopyrightContainer>
      <Container>
        <Row>
          <Col md>
            <CopyrightSpan>
              &copy; Copyright Joao Paulo Duprat Pohlmann. 2021 All Rights
              Reserved.
            </CopyrightSpan>
          </Col>
        </Row>
      </Container>
    </CopyrightContainer>
  );
};

export default Copyright;
