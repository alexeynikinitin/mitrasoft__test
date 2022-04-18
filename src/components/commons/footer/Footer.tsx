import React, { FC } from 'react';

import './Footer.css';
import { Col, Row } from 'react-bootstrap';

export const Footer: FC<FooterType> = () => (
  <Row className="footer align-items-center m-0">
    <Col className="d-flex justify-content-center">Created by Alexey Nikitin, 2022</Col>
  </Row>
);

type FooterType = {};
