import React, { FC } from 'react';

import { Col, Row } from 'react-bootstrap';

// @ts-ignore
import cv from '../../../assets/aboutMe/cv.jpg';

export const AboutMe: FC<AboutMeType> = () => (
  <Row>
    <Col>
      <img
        style={{
          width: '100%',
        }}
        src={cv}
        alt=""
      />
    </Col>
  </Row>
);

type AboutMeType = {};
