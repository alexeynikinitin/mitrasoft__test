import React, { FC } from 'react';

import './Footer.css';
import { Col, Row } from 'react-bootstrap';

export const Footer: FC<FooterType> = () => (
  <Row className="footer align-items-center justify-content-around p-3">
    <Col>Created by Alexey Nikitin</Col>
    <Col>2022</Col>
  </Row>
);

type FooterType = {};
