import React, { FC } from 'react';

import { Col, Row } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

import './Header.css';

export const Header: FC<HeaderType> = () => (
  <Row className="p-3 header justify-content-between">
    <Col xs={1} className="d-flex align-items-center">
      <div className="logo" />
    </Col>
    <Col xs="auto" className="d-flex align-items-center">
      <h1>Mitra Soft (test task)</h1>
    </Col>
    <Col xs={1} className="d-flex justify-content-end align-items-center">
      <div className="burger">
        <img src="" alt="Burger" />
      </div>
      {/* <NavLink to="/">Home </NavLink> */}
      {/* <NavLink to="/gallery">Gallery </NavLink> */}
      {/* <NavLink to="/aboutMe">About Me </NavLink> */}
    </Col>
  </Row>
);

type HeaderType = {};
