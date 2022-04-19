import React from 'react';

import { Col, Row } from 'react-bootstrap';

// @ts-ignore
import cv from '../../../assets/aboutMe/cv.jpg';

export const AboutMe = () => (
  <Row>
    <Col>
      <img
        style={{
          width: '100%',
        }}
        src={cv}
        alt="cv"
      />
    </Col>
  </Row>
);
