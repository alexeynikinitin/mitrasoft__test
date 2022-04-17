import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

export const Header: FC<HeaderType> = () => (
  <div>
    <NavLink to="/">Home </NavLink>
    <NavLink to="/gallery">Gallery </NavLink>
    <NavLink to="/aboutMe">About Me </NavLink>
  </div>
);

type HeaderType = {};
