import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// @ts-ignore
import closeMenu from '../../../assets/burger-menu/close-menu.png';
// @ts-ignore
import hamburger from '../../../assets/burger-menu/hamburger.png';
// @ts-ignore
import photo from '../../../assets/burger-menu/photo.png';
import './Header.css';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openMenuHandle = () => setIsVisible(true);
  const closeMenuHandle = () => setIsVisible(false);

  const fullClassMenuNav = `main_menu ${
    isVisible ? 'main_menu_open' : 'main_menu_close'
  }`;
  const fullClassCloseMenuItem = `close_menu d-block ${
    isVisible ? 'close_menu_open' : 'close_menu_close'
  }`;
  const fullClassBurgerMenu = `hamburger_menu d-block ${
    isVisible ? 'hamburger_menu_close' : 'hamburger_menu_open'
  }`;
  return (
    <Row className="p-3 header justify-content-between m-0">
      <Col xs={1} className="d-flex align-items-center">
        <div className="logo" />
      </Col>
      <Col xs="auto" className="d-flex align-items-center">
        <h1>Mitra Soft (test task)</h1>
      </Col>
      <Col xs={1} className="d-flex justify-content-end align-items-center">
        <nav className={fullClassMenuNav}>
          <Row className="align-items-center mb-5">
            <Col xs={4}>
              <img src={photo} className="photo" alt="" />
            </Col>
            <Col xs={8}>
              <h2>Alexey Nikitin</h2>
              <h5>alexeynikinitin@yandex.by</h5>
            </Col>
          </Row>
          <Row className="nav_link">
            <NavLink className={({ isActive }) => (isActive ? 'active_link' : '')} to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active_link' : '')}
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active_link' : '')}
              to="/aboutMe"
            >
              About Me
            </NavLink>
          </Row>
        </nav>
        <div className={fullClassBurgerMenu}>
          <div className="menutrigger" onClick={openMenuHandle}>
            <img src={hamburger} alt="menu" />
          </div>
        </div>
        <div className={fullClassCloseMenuItem}>
          <div className="closeTrigger" onClick={closeMenuHandle}>
            <img src={closeMenu} alt="close-menu" />
          </div>
        </div>
      </Col>
    </Row>
  );
};
